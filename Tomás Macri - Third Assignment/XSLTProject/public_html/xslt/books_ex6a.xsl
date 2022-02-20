<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html"/>
    <xsl:template match="/">
        <html>
            <head>
                <link rel="stylesheet" href="../css/xsltCSS.css"/>
                <title>food_ex2.xsl</title>
            </head>
            <body>
                <h3>BOOKS</h3>
                <ul>
                    <xsl:apply-templates select="bookShop/book/title"/>
                </ul>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="bookShop/book/title">
        <li>
            <xsl:value-of select="."/>  
        </li>
    </xsl:template>
</xsl:stylesheet>
