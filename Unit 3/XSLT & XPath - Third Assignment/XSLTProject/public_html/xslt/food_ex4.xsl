<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html"/>
    <xsl:template match="/">
        <html>
            <head>
                <link rel="stylesheet" href="../css/xsltCSS.css"/>
                <title>food_ex4.xsl</title>
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
                    
                    <xsl:for-each select="food_list/food_item">
                        <xsl:sort select="fiber_per_serving" order = "descending"/>
                        <xsl:choose>
                            <xsl:when test="@type = 'vegetable'">
                                <tr class="tbody-back">
                                    <td>
                                        <xsl:value-of select="name"/>
                                    </td>
                                    <td>
                                        <xsl:value-of select="carbs_per_serving"/>
                                    </td>
                                    <td>
                                        <xsl:value-of select="fiber_per_serving"/>
                                    </td>
                                    <td>
                                        <xsl:value-of select="fat_per_serving"/>
                                    </td>
                                    <td>
                                        <xsl:value-of select="kj_per_serving"/>
                                    </td>
                                </tr>
                            </xsl:when>
                            <xsl:when test="@type = 'fruit'">
                                <tr class="tbody-backPink">
                                    <td>
                                        <xsl:value-of select="name"/>
                                    </td>
                                    <td>
                                        <xsl:value-of select="carbs_per_serving"/>
                                    </td>
                                    <td>
                                        <xsl:value-of select="fiber_per_serving"/>
                                    </td>
                                    <td>
                                        <xsl:value-of select="fat_per_serving"/>
                                    </td>
                                    <td>
                                        <xsl:value-of select="kj_per_serving"/>
                                    </td>
                                </tr>
                            </xsl:when>
                            <xsl:otherwise>
                                <tr>
                                    <td>
                                        <xsl:value-of select="name"/>
                                    </td>
                                    <td>
                                        <xsl:value-of select="carbs_per_serving"/>
                                    </td>
                                    <td>
                                        <xsl:value-of select="fiber_per_serving"/>
                                    </td>
                                    <td>
                                        <xsl:value-of select="fat_per_serving"/>
                                    </td>
                                    <td>
                                        <xsl:value-of select="kj_per_serving"/>
                                    </td>
                                </tr>
                            </xsl:otherwise>
                        </xsl:choose>      
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>
