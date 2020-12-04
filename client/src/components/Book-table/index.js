import React from "react";
import "./style.css";

export default function BookTable() {
    return (
        <div>
            <table border="1" align="center">
                <thead>
                    <tr><th>TITLE</th><th>ISBN</th><th>PUB<br />Year</th><th>PRICE*</th></tr>
                </thead>
                <tbody>
                    <tr><td>Amateur Radio Transceiver Performance Testing<br /></td><td>9781910190086&nbsp;</td><td>2014</td><td align="center">19.95</td></tr>
                    <tr><td>An Introduction to Antenna Modeling</td><td>9781910193006&nbsp;</td><td>2014</td><td align="center">19.95</td></tr>
                    <tr><td>Arduino Sketches: tools & techniques for programming wizardry</td><td>9781118919606&nbsp;</td><td>2015</td><td align="center">35.00</td></tr>
                    <tr><td>ARRL Handbook 2020, 97th Ed., softcover</td><td>9781625951076&nbsp;</td><td>2019</td><td align="center">49.95</td></tr>
                    <tr><td>ARRL's Best of the Doctor is In, Vol. 1</td><td>9781625950741&nbsp;</td><td>2017</td><td align="center">19.95</td></tr>
                    <tr><td>ARRL's Hands-On Radio Experiments, Vol. 3</td><td>9781625950796&nbsp;</td><td>2018</td><td align="center">22.95</td></tr>
                    <tr><td>ARRL's Small Antennas for Small Spaces, 2nd Ed.</td><td>9781625950512&nbsp;</td><td>2019</td><td align="center">22.95</td></tr>
                    <tr><td>Basic Antennas: Understanding Practical Antennas and Designs</td><td>9780872599994&nbsp;</td><td>2009</td><td align="center">29.95</td></tr>
                    <tr><td>Batteries in a Portable World, 4th Ed.</td><td>9780968211847&nbsp;</td><td>2016</td><td align="center">29.95</td></tr>
                    <tr><td>Circuit Simulation and Analysis</td><td>9781625950055&nbsp;</td><td>2013</td><td align="center">27.95</td></tr>
                    <tr><td>Computers in Amateur Radio, 2nd Ed. w/CDROM</td><td>9781905086856&nbsp;</td><td>2013</td><td align="center">24.95</td></tr>
                    <tr><td>FCC Rules and Regulations for the Amateur Radio Service, 4th Ed.</td><td>9781625950765&nbsp;</td><td>2017</td><td align="center">7.95</td></tr>
                    <tr><td>Get on the Air with HF Digital, 2nd Ed.</td><td>9781625950833&nbsp;</td><td>2018</td><td align="center">19.95</td></tr>
                    <tr><td>Ham Radio for Arduino and PICAXE</td><td>9780872593244&nbsp;</td><td>2013</td><td align="center">29.95</td></tr>
                    <tr><td>High Speed Multimedia for Amateur Radio</td><td>9781625950529&nbsp;</td><td>2016</td><td align="center">27.95</td></tr>
                    <tr><td>Hints & Kinks for the Radio Amateur</td><td>9780872595200&nbsp;</td><td>2012</td><td align="center">19.95</td></tr>
                    <tr><td>International Antennas</td><td>9781910193358&nbsp;</td><td>2017</td><td align="center">19.95</td></tr>
                    <tr><td>License: General Class License Manual, 9th Ed., spiral-bound</td><td>9781625951069&nbsp;</td><td>2019</td><td align="center">32.95</td></tr>
                    <tr><td>License: Ham Radio License Manual, 4th Ed., Spiral-Bound</td><td>9781625950826&nbsp;</td><td>2018</td><td align="center">32.95</td></tr>
                    <tr><td>Magic Band Antennas for Ham Radio</td><td>9781625950987&nbsp;</td><td>2018</td><td align="center">19.95</td></tr>
                    <tr><td>Magnetic Loop Antennas</td><td>9788026099529&nbsp;</td><td>2019</td><td align="center">34.95</td></tr>
                    <tr><td>More Vertical Antenna Classics</td><td>9780872599796&nbsp;</td><td>2006</td><td align="center">17.95</td></tr>
                    <tr><td>Personal Emergency Communications</td><td>9780983505310&nbsp;</td><td>2012</td><td align="center">14.95</td></tr>
                    <tr><td>Propagation and Radio Science</td><td>9781625950277&nbsp;</td><td>2015</td><td align="center">27.95</td></tr>
                    <tr><td>Radio Science for the Radio Amateur</td><td>9780872593381&nbsp;</td><td>2013</td><td align="center">24.95</td></tr>
                    <tr><td>Receiving Antennas for the Radio Amateur</td><td>9781625950789&nbsp;</td><td>2018</td><td align="center">24.95</td></tr>
                    <tr><td>SDR Software Defined Radio, 2nd Ed.</td><td>9781910193464&nbsp;</td><td>2017</td><td align="center">24.95</td></tr>
                    <tr><td>The Care and Feeding of Transmission Lines</td><td>9780872594784&nbsp;</td><td>2012</td><td align="center">27.95</td></tr>
                    <tr><td>The Complete DX'er, 3rd Ed.</td><td>   0961757701</td><td>2003</td><td align="center">19.95</td></tr>
                    <tr><td>The Radio Today Guide to HF Data on FT8 & PSK</td><td>9781910193709&nbsp;</td><td>2019</td><td align="center">14.95</td></tr>
                    <tr><td>Your Guide to HF Fun</td><td>n/a</td><td>2001</td><td align="center">16.00</td></tr>
                </tbody>
            </table>
        </div>
    )
}