<?xml version="1.0" encoding="UTF-8"?>

<!--
    Document   : exercise2.xsl
    Created on : 17 de febrero de 2022, 10:55
    Author     : obama
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
                <title>exercise2.xsl</title>
            </head>
            <body>
                <h2>ANOTHER LIST WITH THE USA ONES</h2>                
                <ol>
                    <xsl:apply-templates select="catalog/cd[country='USA']"/>
                </ol>
            </body>
        </html>
    </xsl:template>
    
    <xsl:template match="catalog/cd">
        <li>
            <xsl:apply-templates select="title"/> from <xsl:apply-templates select="artist"/>
        </li>
    </xsl:template>

    <xsl:template match="title">
        <span style="color:#ff0000">
            <xsl:value-of select="."/>
        </span>
    </xsl:template>
    
    <xsl:template match="artist">
        <span style="color:#ff0000">
            <xsl:value-of select="."/>
        </span>
    </xsl:template>
</xsl:stylesheet>
