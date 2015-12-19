<?xml version="1.0" encoding="UTF-8" ?><!--Declaration of the xml version and character encoding used-->
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0"><!--Declaration of the W£Schools standard-->

	<xsl:template match="/weatherRss.xml"><!--Defining the xml Template-->
			<html>
				<body>
						<xsl:for-each select="channel/item/guid"><!--Creation of a For Loop that to find all references to guid in the xml document-->
							<a href="{guid}"><xsl:value-of select="guid"/></a><!--Creation of a link tag which should convert all GUID's into hyperlinks-->
						</xsl:for-each><!--Closing tag for the For Loop-->
				</body>
			</html>
	</xsl:template><!--Closing tag for the Template to be applied-->

</xsl:stylesheet><!--Closing Tag-->