package com.itd5.homeReviewSite;

import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;

public class ConnectionTest {
    public static void main(String[] args) {
        String jdbcUrl = "jdbc:mysql://localhost:3306/mydb";
        String username = "root";
        String password = "012345";

        try {
            Class.forName("com.mysql.cj.jdbc.Driver"); //JDBC 드라이버 등록
            Connection connection = DriverManager.getConnection(jdbcUrl, username, password); //DB연결
            DatabaseMetaData metadata = connection.getMetaData(); //DB 메타데이터 획득
            ResultSet resultSet = metadata.getTables(null, null, null, new String[]{"TABLE"});
            System.out.println("테이블 출력:"); //테이블 출력
            while (resultSet.next()) {
                String tableName = resultSet.getString("TABLE_NAME");
                System.out.println("테이블 이름: " + tableName);
            }
            resultSet.close(); //결과 값 종료

            connection.close(); //연결 종료
            System.out.println("실행완료");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}

