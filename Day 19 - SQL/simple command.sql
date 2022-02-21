1. CREATE COMMAND:
	This command is used to create the table.
Syntax: 
	Create table tablename(columnname  datatype(null/notnull),………);
ALTER COMMAND:
This is used for adding the values and also modifying the table.
Syntax: 
      	 SQL> ALTER TABLE table_name
            ADD column_name datatype;
ALTER TABLE table_name
  MODIFY column_name column_type;
Syntax: To RENAME A COLUMN in an existing table, the Oracle ALTER TABLE syntax is:
ALTER TABLE table_name
  RENAME COLUMN old_name TO new_name;
Syntax
To RENAME A TABLE, the Oracle ALTER TABLE syntax is:
ALTER TABLE table_name
  RENAME TO new_table_name;
3. DESC COMMAND:
This command is used to give the structure of the table.
Syntax: 
       SQL>desc  tablename;

4. TRUNCATE COMMAND:
The contents of the table are deleted by using this command.
Syntax:
 truncate table tablename;
DROP COMMAND:
           1.   This commend is used to delete one column of the table.
Syntax:
      
ALTER TABLE table_name
  DROP COLUMN column_name;