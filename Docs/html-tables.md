HTML Tables

HTML tables ka use data ko rows aur columns ki form mein display karne ke liye hota hai.

1. Basic Table Structure
<table>
    <tr>
        <th>Name</th>
        <th>Age</th>
    </tr>

    <tr>
        <td>Ali</td>
        <td>21</td>
    </tr>
</table>

2. Important Table Tags

<table> — Table create karta hai.

<tr> — Table Row create karta hai.

<th> — Table Header Cell.

<td> — Table Data Cell.

<caption> — Table ka title/caption.

<thead> — Header section.

<tbody> — Main table data.

<tfoot> — Footer section.

3. Table Caption
<table>
    <caption>Student Record</caption>

    <tr>
        <th>Name</th>
        <th>Roll No</th>
    </tr>

    <tr>
        <td>Ali</td>
        <td>101</td>
    </tr>
</table>

4. Table Head, Body and Footer

Large tables ko logically different sections mein divide kiya ja sakta hai.

<table>
    <thead>
        <tr>
            <th>Subject</th>
            <th>Marks</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>HTML</td>
            <td>85</td>
        </tr>
        <tr>
            <td>CSS</td>
            <td>80</td>
        </tr>
    </tbody>

    <tfoot>
        <tr>
            <td>Total</td>
            <td>165</td>
        </tr>
    </tfoot>
</table>

5. Colspan

colspan ek cell ko multiple columns mein spread karta hai.

<table>
    <tr>
        <th colspan="2">Student Information</th>
    </tr>

    <tr>
        <td>Name</td>
        <td>Ali</td>
    </tr>
</table>

6. Rowspan

rowspan ek cell ko multiple rows mein spread karta hai.

<table>
    <tr>
        <th rowspan="2">Name</th>
        <td>Ali</td>
    </tr>

    <tr>
        <td>Ahmed</td>
    </tr>
</table>

7. Complete Example
<table>
    <caption>Student Marks</caption>

    <thead>
        <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Subject</th>
            <th>Marks</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>01</td>
            <td>Ali</td>
            <td>HTML</td>
            <td>85</td>
        </tr>

        <tr>
            <td>02</td>
            <td>Ahmed</td>
            <td>HTML</td>
            <td>90</td>
        </tr>
    </tbody>
</table>

Summary
Tag/Attribute	Purpose
<table>	Table
<tr>	Table row
<th>	Header cell
<td>	Data cell
<caption>	Table title
<thead>	Table header section
<tbody>	Table body
<tfoot>	Table footer section
colspan	Multiple columns merge
rowspan	Multiple rows merge