<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0"
                xmlns="http://www.w3.org/1999/xhtml">
    
    <xsl:output method="xml"
                doctype-public="-//OASIS//DTD DocBook XML V4.5//EN"
                encoding="UTF-8"
                indent="yes"
    />
    
<xsl:template match="/">
# Závěrečná zpráva k projektu Zoo
<xsl:apply-templates select="./article/info"/>
## Zpráva
<xsl:apply-templates select="./article/section"/>
</xsl:template>
    
<xsl:template match="info">
**Title:** <xsl:value-of select="./title"/><br/>
**Author:** <xsl:value-of select="./author/personname"/><br/>
**Organization:** <xsl:value-of select="./author/affiliation/orgname"/><br/>
</xsl:template>
    
<xsl:template match="section">
### <xsl:value-of select="./title"/>
<xsl:apply-templates />
</xsl:template>

<xsl:template match="para">
- <xsl:value-of select="."/>
</xsl:template>
</xsl:stylesheet>