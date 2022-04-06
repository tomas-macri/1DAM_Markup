<?xml version="1.0" encoding="UTF-8"?>

<!--
    Document   : articles3.1.xsl
    Created on : 28 de febrero de 2022, 20:56
    Author     : tomas
    Description:
        Purpose of transformation follows.
-->

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html"/>

    <!-- TODO customize transformation rules 
         syntax recommendation http://www.w3.org/TR/xslt 
    -->
    <xsl:template match="/">
        <html>
            <head>
                <link href="../css/myCss.css" rel="stylesheet"/>
                <title>articles3.1.xsl</title>
            </head>
            <body>
                <table>
                    <tr>
                        <th>ARTICLE</th>
                        <th>DETAIL</th>
                        <th>PRICE (no IVA)</th>
                        <th>ORDER</th>
                        <th>REFERENCE</th>
                    </tr>
                    <xsl:apply-templates select="//article[category='Tshirt']"/>
                    <tr>
                        <td>
                            Total Tshirts
                        </td>   
                        <td> 
                            <xsl:value-of select="count(//article[category='Tshirt'])"/>
                        </td>
                    </tr>
                    <xsl:apply-templates select="//article[category='Complements']"/>
                    <tr>
                        <td>
                            Total Complements
                        </td>   
                        <td> 
                            <xsl:value-of select="count(//article[category='Complements'])"/>
                        </td>
                    </tr>
                </table>
            </body>
        </html>
    </xsl:template>
   
   
    <xsl:template match="//article">
        <tr>
            <td>
                <xsl:value-of select="category"/>
            </td>
            <td>
                <xsl:value-of select="detail"/>
            </td>
            <td>
                <xsl:value-of select="price"/>
            </td>
            <td>
                <xsl:value-of select="order"/>
            </td>
            <td>
                <xsl:value-of select="reference"/>
            </td>
        </tr>
    </xsl:template>
    

   <!--<xsl:template match="//article[category='Tshirt']">
        <tr>
            <td>
                <xsl:value-of select="category"/>
            </td>
            <td>
                <xsl:value-of select="detail"/>
            </td>
            <td>
                <xsl:value-of select="price"/>
            </td>
            <td>
                <xsl:value-of select="order"/>
            </td>
            <td>
                <xsl:value-of select="reference"/>
            </td>
        </tr>
    </xsl:template>
    
    <xsl:template match="//article[category='Complements']">
        <tr>
            <td>
                <xsl:value-of select="category"/>
            </td>
            <td>
                <xsl:value-of select="detail"/>
            </td>
            <td>
                <xsl:value-of select="price"/>
            </td>
            <td>
                <xsl:value-of select="order"/>
            </td>
            <td>
                <xsl:value-of select="reference"/>
            </td>
        </tr>
    </xsl:template>
        -->
</xsl:stylesheet>

