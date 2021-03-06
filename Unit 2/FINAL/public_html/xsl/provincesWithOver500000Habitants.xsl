<?xml version="1.0" encoding="UTF-8"?>

<!--
    Document   : provincesWithOver500000Habitants.xsl
    Created on : 20 de marzo de 2022, 17:34
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
            
                <title>Provinces with over 500.000 people</title>
                <link rel="icon" type="image/png" href="../images/general/argentinaIcon.png"/>
                <link rel="stylesheet" href="../css/CSSArgentina.css"/>
                <link rel="stylesheet" href="../css/MyFirstSASS.css"/>
                <link href="../css/bootstrap.min.css" rel="stylesheet"/>
                <script src="../js/bootstrap.bundle.min.js"></script>
            </head>
            <body>
                <header class="container-fluid bgLightBlue">
                    <div>
                        <a id="titleAndImageHeader" class="d-inline-block" href="../index.html#">
                            <img src="../images/general/logo.png" alt="logo" class="float-sm-start"/>
                            <h2 id="headerTitle" class="text-center d-none d-lg-block float-end">Argentina</h2>
                        </a>
                        <button type="button" class="btn mt-5 float-sm-end h-25" data-bs-toggle="collapse" data-bs-target="#myNavbar">
                            <img src="../images/general/moreOptions.png" alt="moreOptions" class="w-25 h-25" />
                        </button>

                        <div class="d-none d-lg-block float-end mt-5 mx-4">
                            <form action="https://www.argentina.gob.ar/" target="_blank" method="get">
                                <input class="flLeft mt-1 mx-2 rounded-3 border-white" type="text" placeholder="Search..." name="search"/>
                                <button id="searchButton" type="submit" class="btn border-2 text-white border-white">Search</button>
                            </form>
                        </div>
                    </div>
                    <div id="myNavbar" class="collapse">
                        <nav class="navbar navbar-expand-lg mx-0 mb-0 pb-0 px-0 navbar-dark">
                            <div class="container-fluid px-0 mx-0 row">
                                <ul class="navbar-nav m-0 p-0 ">
                                    <li class="nav-item text-center  col-md-12 col-lg-3">
                                        <a class="nav-link linkNavbar text-white" href="../index.html">Home</a>
                                    </li>
                                    <li class="nav-item text-center  col-md-12 col-lg-3">
                                        <a class="nav-link linkNavbar text-white" href="geography.html">Geography</a>
                                    </li>
                                    <li class="nav-item dropdown text-center col-md-12 col-lg-3">
                                        <a class="nav-link linkNavbar text-white dropdown-toggle" href="#"
                                               data-bs-toggle="dropdown" data-bs-target="#cultureDropdown">
                                            Culture
                                        </a>
                                        <ul class="bgLightBlue dropdown-menu text-white dropdown-menu-end bg-black" id="cultureDropdown">
                                            <li>
                                                <a class="border-0 linkNavbar text-white nav-link" href="culture.html#Food">Food</a>
                                            </li>
                                            <li>
                                                <a class="border-0 linkNavbar text-white nav-link" href="culture.html#Football">Football</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-item text-center itemSidebar col-md-12 col-lg-3">
                                        <a class="nav-link linkNavbar bgLightBlue text-white" data-bs-toggle="modal" data-bs-target="#modalArgentina" href="">Join us</a>  <!-- the href atribute is written because if not the cursor will not appear as clickable when hovering the item-->
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <!--MODAL-->
                    <div class="modal text-white" id="modalArgentina">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header bgCornBlue">
                                    <h3 class="modal-title">We are looking forward to having you!</h3>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                </div>

                                <div class="container bgCornBlue">
                                    <h4 class="text-white">Join our email list and discover the latest news about Argentina</h4>
                                    <form action="https://jkorpela.fi/cgi-bin/echo.cgi" class="was-validated" method="post" id="myForm">
                                        <div class="form-group">
                                            <label for="name">Name:</label>
                                            <input type="text" class="form-control" id="name" placeholder="Enter your name" name="name" required="true"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="email">E-mail:</label>
                                            <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" required="true"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="date">Date:</label>
                                            <input type="date" class="form-control" id="date" name="date" required="true"/>
                                        </div>
                                        <div class="form-group form-check-inline">
                                            <label class="form-check-label" for="radio1">
                                                <input type="radio" class="form-check-input" id="radio1" name="optradio" value="male" required="true"/>Male
                                            </label>
                                        </div>
                                        <div class="form-check-inline">
                                            <label class="form-check-label" for="radio2">
                                                <input type="radio" class="form-check-input" id="radio2" name="optradio" value="female" required="true"/>Female
                                            </label>
                                        </div>
                                        <div class="form-group">
                                            <label for="suggestion">Suggestions:</label>
                                            <textarea class="form-control" rows="5" id="suggestion" name="suggestions" placeholder="Leave your suggestions here..."></textarea>
                                        </div>
                                        <div class="form-group form-check">
                                            <label class="form-check-label">
                                                <input class="form-check-input" type="checkbox" name="accept_PP" required="true"/> I have read and accept the <a href="https://www.termsfeed.com/live/750baf27-3d59-4974-b8c8-3243f7d44812" target="_blank">privacy policy</a>.
                                            </label>
                                        </div>
                                        <button type="submit" class="btn bgLinearLightBlueToWhite text-white my-3">Join us!</button>
                                        <button type="reset" value="reset" class="btn bgLinearLightBlueToWhite text-white mr-5 my-3">Clear</button>
                                    </form>
                                </div>

                                <div class="modal-footer bgCornBlue">
                                    <button type="button" class="btn bgLinearLightBlueToWhite text-white" data-bs-dismiss="modal">Close</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </header>
                <div class="bgMainPage">
                    <h1>Provinces with over 500.000 people</h1>
                    <br/>
                    <table class="table table-light table-striped table-hover text-center border-info mt-5">
                        <tr class="border-1">
                            <td colspan="4">
                                <h3>Provinces</h3>
                            </td>
                        </tr>
                        <tr>
                            <td class="blackBorder_x">
                                <h4>PROVINCE</h4>
                            </td>
                            <td class="blackBorder_x">
                                <h4>NAME</h4>
                            </td>
                            <td class="blackBorder_x">
                                <h4>POPULATION</h4>
                            </td>
                        </tr>
                        <xsl:apply-templates select="provinces/province[@population>500000]"/>
                    </table>
                </div>
                
                <footer class="bgCornBlue text-center text-white mt-1">
                    <a href="index.html"> 
                        <img src="../images/general/logo.png" alt="Page logo"/>
                    </a>
                    <img src="../images/general/logoIESQuevedo.png" alt="IES Francisco de Quevedo"/>
                    <p>Tom??s Ezequiel Macri | 1??DAM</p>
                    <p>I.E.S. Francisco de Quevedo | December - 2021</p>
                </footer>
            </body>
        </html>
    </xsl:template>
    
    <xsl:template match="provinces/province">
        <tr>
            <xsl:apply-templates select="full_name"/>
            <xsl:apply-templates select="@iso_name"/>
            <xsl:apply-templates select="populationWithPoints"/>
        </tr>
    </xsl:template>
    
    <xsl:template match="full_name">
        <td class="blackBorder_x">
            <xsl:value-of select="."/>
        </td>
    </xsl:template>
    
    <xsl:template match="@iso_name">
        <td class="blackBorder_x">
            <xsl:value-of select="."/>
        </td>
    </xsl:template>
    
    <xsl:template match="populationWithPoints">
        <td class="blackBorder_x">
            <xsl:value-of select="."/>
        </td>
    </xsl:template>
</xsl:stylesheet>
