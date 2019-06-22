package com.yyt.tx.mjf.common.util;

import com.yyt.tx.mjf.common.pojo.ColumnPojo;
import com.yyt.tx.mjf.common.pojo.TablePojo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.StringUtils;

import java.io.*;
import java.net.URL;
import java.sql.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * @Package: com.yyt.tx.mjf.common.util
 * @ClassName: GenerateUtils
 * @Author: majiafei
 * @Description:
 * @Date: 2019/6/22 21:53
 */
public class GenerateUtils {

    private static  Map<String, String> primaryKeyMap = new ConcurrentHashMap<>();
    private static  Map<String, List<String>> columnMap = new ConcurrentHashMap<>();

    private static final String entityLocation = "F:\\myproject\\idea\\tx-demo\\src\\main\\java\\com\\yyt\\tx\\mjf\\entity";

    private static final String FILE_SUFFIX = ".java";

    private static  Map<String, String> jdbcTypeToJavaTypeMap = new HashMap<>();

    private static final String COLUMN_ANNOTATION_NAME = "@Column";

    static {
        jdbcTypeToJavaTypeMap.put("INT", "Integer");
        jdbcTypeToJavaTypeMap.put("VARCHAR", "String");
        jdbcTypeToJavaTypeMap.put("BIGINT", "Long");
        jdbcTypeToJavaTypeMap.put("DECIMAL", "Double");
    }

    public static void getColumnInfo() throws ClassNotFoundException, SQLException {
        Class.forName("com.mysql.jdbc.Driver");
        Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/test?serverTimezone=UTC", "root", "1111");
        // 获取元数据
        DatabaseMetaData metaData = connection.getMetaData();
        ResultSet tables = metaData.getTables("test", null, null, new String[]{"TABLE"});

        List<TablePojo> tablePojoList = new ArrayList<>();

        while (tables.next()) {
            // 获取表名
            String table_name = tables.getString("TABLE_NAME");

            TablePojo tablePojo = new TablePojo();
            tablePojo.setTableName(table_name);

            // 获取所有的字段
            ResultSet columns = metaData.getColumns(null, null, table_name, null);
            ResultSet primaryKeys = metaData.getPrimaryKeys("test", null, table_name);
            while (primaryKeys.next()) {
                // 主键的字段名称
//                primaryKeyMap.put(underlineToHump(table_name), primaryKeys.getString("COLUMN_NAME"));
                tablePojo.setPrimaryKeyName( primaryKeys.getString("COLUMN_NAME"));
            }
            while (columns.next()) {
                String column_name = columns.getString("COLUMN_NAME");
                System.out.println(column_name);

                List<ColumnPojo> columnPojoList = new ArrayList<>();
                ColumnPojo columnPojo = new ColumnPojo();
                columnPojo.setColumnName(column_name);

                if (StringUtils.hasLength(primaryKeyMap.get(table_name)) && !primaryKeyMap.get(table_name).equals(column_name)) {
                    List<String> columnList = columnMap.get(column_name);
                    if (columnList == null) {
                        columnList = new ArrayList<>();
                    }
                    columnList.add(column_name);
                    columnMap.put(underlineToHump(table_name), columnList);
                }
            }
        }
    }

    public static void generateEntity() {
        File entityFile = new File(entityLocation);
        if (!entityFile.exists()) {
            entityFile.mkdirs();
        }

        // 遍历字段信息
        columnMap.forEach((tableName, columnList) -> {
            try {
                StringBuilder sb = new StringBuilder();
                sb.append("public class " + tableName + "{");
                BufferedOutputStream outputStream = new BufferedOutputStream(new FileOutputStream(entityLocation + File.separator + tableName + FILE_SUFFIX));
                for (String column : columnList) {
                    sb.append("\n");
                    sb.append(column);
                    break;
                }
                sb.append("\n}");
                outputStream.write(sb.toString().getBytes());
                outputStream.flush();
                outputStream.close();
            } catch (FileNotFoundException e) {
                e.printStackTrace();
            } catch (IOException e) {
                e.printStackTrace();
            }
        });
    }

    /**
     * 将下划线转换成驼峰
     * @return
     */
    private static String underlineToHump(String str) {
        StringBuilder sb = new StringBuilder();
        String[] strArray = StringUtils.tokenizeToStringArray(str, "_");
        for (int i = 0; i < strArray.length; i++) {
           if (i == 0) {
               sb.append(strArray[i]);
           } else {
               sb.append(firstLetterConverUppercase(strArray[i]));
           }
        }

        return sb.toString();
    }

    private static String firstLetterConverUppercase(String str) {
        if (StringUtils.isEmpty(str)){
            return "";
        }
        char[] chars = str.toCharArray();
        for (int i = 0; i < chars.length; i++) {
            if (i == 0) {
                chars[i] = Character.toUpperCase(chars[i]);
            }
        }

        return new String(chars);
    }

    private final static Logger LOGGER = LoggerFactory.getLogger(GenerateUtils.class);

    private static final String DRIVER = "com.mysql.jdbc.Driver";
    private static final String URL = "jdbc:mysql://localhost:3306/test?serverTimezone=UTC";
    private static final String USERNAME = "root";
    private static final String PASSWORD = "1111";

    private static final String SQL = "SELECT * FROM ";// 数据库操作

    static {
        try {
            Class.forName(DRIVER);
        } catch (ClassNotFoundException e) {
            LOGGER.error("can not load jdbc driver", e);
        }
    }

    /**
     * 获取数据库连接
     *
     * @return
     */
    public static Connection getConnection() {
        Connection conn = null;
        try {
            conn = DriverManager.getConnection(URL, USERNAME, PASSWORD);
        } catch (SQLException e) {
            LOGGER.error("get connection failure", e);
        }
        return conn;
    }

    /**
     * 关闭数据库连接
     * @param conn
     */
    public static void closeConnection(Connection conn) {
        if(conn != null) {
            try {
                conn.close();
            } catch (SQLException e) {
                LOGGER.error("close connection failure", e);
            }
        }
    }

    /**
     * 获取数据库下的所有表名
     */
    public static List<String> getTableNames() {
        List<String> tableNames = new ArrayList<>();
        Connection conn = getConnection();
        ResultSet rs = null;
        try {
            //获取数据库的元数据
            DatabaseMetaData db = conn.getMetaData();
            //从元数据中获取到所有的表名
            rs = db.getTables("test", null, null, new String[] { "TABLE" });
            while(rs.next()) {
                tableNames.add(rs.getString(3));
            }
        } catch (SQLException e) {
            LOGGER.error("getTableNames failure", e);
        } finally {
            try {
                rs.close();
                closeConnection(conn);
            } catch (SQLException e) {
                LOGGER.error("close ResultSet failure", e);
            }
        }
        return tableNames;
    }

    /**
     * 获取表中所有字段名称
     * @param tableName 表名
     * @return
     */
    public static List<String> getColumnNames(String tableName) {
        List<String> columnNames = new ArrayList<>();
        //与数据库的连接
        Connection conn = getConnection();
        PreparedStatement pStemt = null;
        String tableSql = SQL + tableName;
        try {
            pStemt = conn.prepareStatement(tableSql);
            //结果集元数据
            ResultSetMetaData rsmd = pStemt.getMetaData();
            //表列数
            int size = rsmd.getColumnCount();
            for (int i = 0; i < size; i++) {
                columnNames.add(rsmd.getColumnName(i + 1));
            }
        } catch (SQLException e) {
            LOGGER.error("getColumnNames failure", e);
        } finally {
            if (pStemt != null) {
                try {
                    pStemt.close();
                    closeConnection(conn);
                } catch (SQLException e) {
                    LOGGER.error("getColumnNames close pstem and connection failure", e);
                }
            }
        }
        return columnNames;
    }

    /**
     * 获取表中所有字段类型
     * @param tableName
     * @return
     */
    public static List<String> getColumnTypes(String tableName) {
        List<String> columnTypes = new ArrayList<>();
        //与数据库的连接
        Connection conn = getConnection();
        PreparedStatement pStemt = null;
        String tableSql = SQL + tableName;
        try {
            pStemt = conn.prepareStatement(tableSql);
            //结果集元数据
            ResultSetMetaData rsmd = pStemt.getMetaData();
            //表列数
            int size = rsmd.getColumnCount();
            for (int i = 0; i < size; i++) {
                columnTypes.add(rsmd.getColumnTypeName(i + 1));
            }
        } catch (SQLException e) {
            LOGGER.error("getColumnTypes failure", e);
        } finally {
            if (pStemt != null) {
                try {
                    pStemt.close();
                    closeConnection(conn);
                } catch (SQLException e) {
                    LOGGER.error("getColumnTypes close pstem and connection failure", e);
                }
            }
        }
        return columnTypes;
    }

    /**
     * 获取表中字段的所有注释
     * @param tableName
     * @return
     */
    public static List<String> getColumnComments(String tableName) {
        List<String> columnTypes = new ArrayList<>();
        //与数据库的连接
        Connection conn = getConnection();
        PreparedStatement pStemt = null;
        String tableSql = SQL + tableName;
        List<String> columnComments = new ArrayList<>();//列名注释集合
        ResultSet rs = null;
        try {
            pStemt = conn.prepareStatement(tableSql);
            rs = pStemt.executeQuery("show full columns from " + tableName);
            while (rs.next()) {
                columnComments.add(rs.getString("Comment"));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            if (rs != null) {
                try {
                    rs.close();
                    closeConnection(conn);
                } catch (SQLException e) {
                    LOGGER.error("getColumnComments close ResultSet and connection failure", e);
                }
            }
        }
        return columnComments;
    }

    public static void generateEntity_2() throws IOException {
        List<String> tableNames = getTableNames();

        for (String tableName : tableNames) {
            StringBuilder sb = new StringBuilder();
            sb.append("public class " + firstLetterConverUppercase(underlineToHump(tableName)) + "{");
            sb.append("\n");
            List<String> columnNames = getColumnNames(tableName);
            List<String> columnTypes = getColumnTypes(tableName);
            for (int i = 0; i < columnNames.size(); i++) {
                sb.append(COLUMN_ANNOTATION_NAME + "(value = \"" + columnNames.get(i) + "\")");
                sb.append("\n");
                sb.append("private " + jdbcTypeToJavaTypeMap.get(columnTypes.get(i).toUpperCase()) + " " + underlineToHump(columnNames.get(i)));
                sb.append(";");
                sb.append("\n");
            }
            sb.append("}");
            generateFile(firstLetterConverUppercase(underlineToHump(tableName)), sb.toString());
        }
    }

    public static void generateFile(String clssName, String entityInfo) throws IOException {
        File file = new File(entityLocation);
        if (!file.exists()) {
            file.mkdirs();
        }

        BufferedOutputStream bufferedOutputStream = null;
        bufferedOutputStream = new BufferedOutputStream(new FileOutputStream(entityLocation + File.separator + clssName + FILE_SUFFIX));
        bufferedOutputStream.write(entityInfo.getBytes());
        bufferedOutputStream.flush();
        bufferedOutputStream.close();
    }


    public static void main(String[] args) throws IOException {
        generateEntity_2();
    }

}
