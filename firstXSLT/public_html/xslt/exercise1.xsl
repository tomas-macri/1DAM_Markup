<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title>exercise1.xsl</title>
            </head>
            <body>
                <ol>
                    <xsl:for-each select="catalog/cd">
                        <li>
                            <xsl:value-of select="title"/>
                            from
                            <xsl:value-of select="artist"/>
                        </li>
                    </xsl:for-each>
                </ol>
                
                <h3>ANOTHER LIST WITH THE USA ONES</h3>
                
                <ol>
                    <xsl:for-each select="catalog/cd">
                        <xsl:if test="country = 'USA'">                     
                            <li>
                                <xsl:value-of select="title"/>
                                from
                                <xsl:value-of select="artist"/>
                            </li>
                        </xsl:if>
                    </xsl:for-each>
                </ol>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
