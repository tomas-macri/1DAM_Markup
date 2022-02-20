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
                <table>
                    <tr class="thead-back">
                        <th>Food Item</th>
                        <th>Carbs (g)</th>
                        <th>Fiber (g)</th>
                        <th>Fat (g)</th>
                        <th>Energy (kj)</th>
                    </tr>
                    <xsl:apply-templates select="food_list/food_item"/>
                </table>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="food_list/food_item">
        <tr class="tbody-back">
            <xsl:apply-templates select="name"/>
            <xsl:apply-templates select="carbs_per_serving"/>
            <xsl:apply-templates select="fiber_per_serving"/>
            <xsl:apply-templates select="fat_per_serving"/>
            <xsl:apply-templates select="kj_per_serving"/>
        </tr>        
    </xsl:template>
    
    <xsl:template match="name">
        <td>
            <xsl:value-of select="."/>  
        </td>
    </xsl:template>
    
    <xsl:template match="carbs_per_serving">
        <td>
            <xsl:value-of select="."/>  
        </td>
    </xsl:template>

    <xsl:template match="fiber_per_serving">
        <td>
            <xsl:value-of select="."/>  
        </td>
    </xsl:template>
    
    <xsl:template match="fat_per_serving">
        <td>
            <xsl:value-of select="."/>  
        </td>
    </xsl:template>
    
    <xsl:template match="kj_per_serving">
        <td>
            <xsl:value-of select="."/>  
        </td>
    </xsl:template>
</xsl:stylesheet>
