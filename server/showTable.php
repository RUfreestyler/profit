<?php
    function showTable($tableName)
    {
        require_once 'connect.php';

        $stmt = $db->prepare("SELECT * FROM $tableName");
        $stmt->execute();
        $result = $stmt->get_result();
        $metadata = $stmt->result_metadata();
        $fields = $result->fetch_fields();
        $users = $result->fetch_all(MYSQLI_ASSOC);

        echo "<h1>".$fields[0]->table."</h1>"; //show table name

        echo "<table>";
            //displaying columns
            echo "<tr>";
                foreach ($fields as $field) {
                    echo "<th>$field->name</th>";
                }
            echo "</tr>";
            //displaying rows
            foreach ($users as $user) {
                echo "<tr>";
                foreach ($user as $colValue) {
                    echo "<td>$colValue</td>";
                }
                echo "</tr>";
            }
        echo "</table>";

        $metadata->close();
        $db->close();
    }
?>