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
                <h1>EVERY SECTION</h1>
                <xsl:apply-templates select="bookShop/book/section"/>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="bookShop/book/section">
        <h3> Section <xsl:value-of select="./@par"/> </h3>
        <xsl:apply-templates select="chapter"/>
    </xsl:template>
    
    
    
    <xsl:template match="chapter">  
        <h4>Chapter: <xsl:value-of select="./@num"/> </h4>
          <table>
            <tr>
                <th>Title</th>
                <th>Nº Pages</th>
            </tr>
            <tr>
                <xsl:apply-templates select="title"/>
                <xsl:apply-templates select="npages"/>
            </tr>
        </table> 
    </xsl:template>  
    
    
    <xsl:template match="title">  
        <td>
            <xsl:value-of select="."/>  
        </td>
    </xsl:template>  
    
    <xsl:template match="npages">  
        <td>
            <xsl:value-of select="."/>  
        </td>
    </xsl:template>  
</xsl:stylesheet>
