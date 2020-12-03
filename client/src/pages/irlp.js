import React from 'react'

export default function Irlp() {
    return(
        <div>
            <h3>Getting Started with IRLP</h3>
                <p>The Utah Amateur Radio Club operates an IRLP node on its 146.76 Lake Mountain repeater. Members can use this node to communicate with amateurs across the country and in many parts of the world.</p>
            <h5>What is IRLP?</h5>
                <p>IRLP stands for the Internet Radio Linking Project, a worldwide system that lets repeaters and simplex stations interconnect with each other on a temporary basis using Internet. The system was developed by Dave Cameron, VE7LTD, and others from British Columbia, Canada.</p>
                <p>IRLP has many similarities to a telephone system. A user on one IRLP repeater may decide to “dial up” another repeater. He sends some digits with his touchtone pad and, if the distant repeater is available, the two become connected. Anyone who transmits on either repeater is heard on both. After a time, perhaps when a QSO is completed, operators at either end can “hang up” the connection by sending additional DTMF (touchtone) digits.</p>
                <p>Many details about IRLP are available at the <a href="www.irlp.net">official IRLP website</a></p>
            <h5>What Equipment is Necessary to Use IRLP?</h5>
                <p>The only equipment necessary to use UARC's IRLP node is a station that can operate on the 146.76 repeater, and the ability to send DTMF tones. No computer or internet connection is required. However, internet access can be helpful to look up information about distant nodes you might want to reach.</p>
            <h5>What Preparation is Necessary to Use IRLP?</h5>
                <p>Similar to making a telephone call, before you make an IRLP connection you must decide who you are going to call and find out what the number is. In the case of IRLP “nodes”, the number you must look up is a four-digit node number.</p>
                <p>The <a href="http://www.irlp.net/status.html">IRLP Status Page</a> is a good place to peruse the available nodes. It offers several pages that list nodes in different formats. The Status info as a new full page window page is one that shows which nodes are available and which ones are currently engaged in a connection. Note that you can follow the link on any node number and get specific information about that node.</p>
                <p>The other piece of information you need besides some likely destination node numbers, is the prefix code for using the UARC system. The current code is printed on the inside front cover of all printed issues of the club newsletter, The Microvolt. For new members, it can also be obtained by calling one of the officers.</p>
                <p>You may also want to consult the manual for your radio if you are unsure how to send DTMF tones.</p>
            <h5>So How Do I Dial Up a Connection?</h5>
                <p>There are three steps to making an IRLP connection. All three steps must be done without pause in a single transmission, i.e. you must press your push-to-talk button at the beginning of the sequence and not release it until all three steps are completed. The steps are as follows:</p>
                <ol>
                    <li>Give voice identification. Be sure you are speaking up and are close to the microphone. One of the most common reasons for failure is that the ID audio is so low it is not recognized.</li>
                    <li>Send the UARC prefix code.</li>
                    <li>Send the four-digit number of the node with which you would like to connect.</li>
                </ol>
                <p>Release your push-to-talk, wait a few seconds, and you should soon hear a voice message. The message may indicate that a successful connection has been made, that the node is busy, that the distant node is not in service, or that some technical problem has kept the connection from being made.</p>
                <p>If, after ten seconds or so, you get no response, try again. If you still have no success, you may need to get some help trouble-shooting the problem. Some possible difficulties are:</p>
                <ul>
                    <li>You don't have a good enough signal into the repeater.</li>
                    <li>You didn't keep your carrier keyed through all three steps.</li>
                    <li>Your ID audio was too low to be recognized.</li>
                    <li>The node is out of service or has a problem.</li>
                    <li>Your DTMF pad is not operating correctly on one or more digits.</li>
                </ul>
            <h5>How Do I Hang Up the Connection?</h5>
                <p>Hanging up the connection is very similar to making the connection. Again, there are three steps that must be completed in one transmission:</p>
                <ol>
                    <li>Give voice identification.</li>
                    <li>Send the UARC prefix code.</li>
                    <li>Send “73,” the universal hang-up code.</li>
                </ol>
                <p>You should hear a voice message indicating the connection has been cleared.</p>
                <p>Don't make a connection and then leave without either hanging up or making sure another UARC member is monitoring and will watch over the connection.</p>
            <h5>What is a Reflector?</h5>
                <p>Like in a telephone system, only two IRLP stations can normally be connected at once. If a third station tries to connect to either of the original two, he will get the equivalent of a “busy signal,” a message that the node he is trying to reach is already connected to another node.</p>
                <p>There is, however, a mechanism to allow more than two nodes to be connected at once. That mechanism is the “reflector.” Each reflector has a four-digit node number, just like any other node, but there are differences. A reflector is not connected directly to a radio; it is used only to interconnect other nodes. It can accept connections from a large number of nodes at once. It is extremely rare to get a “busy” message when connecting to a reflector. They normally have enough bandwidth and processing power to accept all comers. Every repeater connected to a reflector is effectively connected to all the other repeaters connected to that same reflector. Reflector node numbers always start with a “9.”</p>
                <p><a href="http://status.irlp.net/">The Connected Nodes and Reflector status page</a> is a place to find out which reflectors are active and how many connections each one has. (Scroll down to the “Reflector Status” heading.) Two of the most active reflectors are The Western Reflector, node 9250, and the WINS Reflector, node 9453.</p>
        </div>
        )}