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
                <title>articles3.2.xsl</title>
            </head>
            <body>
                <table>
                    <tr>
                        <th>DETAIL</th>
                        <th>PRICE (no IVA)</th>
                        <th>PRICE (with IVA)</th>
                    </tr>
                    <xsl:apply-templates select="//article"/>
                </table>
            </body>
        </html>
    </xsl:template>
    
    <xsl:template match="//article">
        <tr>
            <xsl:apply-templates select="detail"/>
            <xsl:apply-templates select="price"/>
        </tr>
    </xsl:template>
    
    <xsl:template match="detail">
        <td><xsl:value-of select="."/></td>
    </xsl:template>
    
    <xsl:template match="price">
        <td><xsl:value-of select="."/></td>
        <td><xsl:value-of select=".*1.21"/></td>
    </xsl:template>
    
</xsl:stylesheet>
