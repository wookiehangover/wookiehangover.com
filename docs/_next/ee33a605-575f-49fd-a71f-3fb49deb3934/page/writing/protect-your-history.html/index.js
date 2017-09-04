
          window.__NEXT_REGISTER_PAGE('/writing/protect-your-history.html', function() {
            var comp = module.exports=webpackJsonp([7],{503:function(e,t,o){e.exports=o(504)},504:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(9),s=r(n),p=o(3),i=r(p),a=o(21),h=r(a),c=o(22),d=r(c),l=o(23),y=r(l);t.default=function(e){var t={title:"Protect Your Browsing History with DNSCrypt",slug:"protect-your-history.html",description:"DNSCrypt is a great way to ensure that your browsing history isn't being spyed on. Learn how to set up DNSCrypt to keep your DNS traffic from prying eyes.",path:"pages/writing/protect-your-history.html.html.js",permalink:"writing/protect-your-history.html",updatedAt:"Tue Aug 15 21:17:25 2017 -0700"},o={type:"div",props:{},children:[{type:"h2",props:{},children:["Protect Your Browsing History with DNSCrypt"]},"\n",{type:"p",props:{},children:["In light of the recent rollback(s) of regulations meant to restrict how ISP's share and sell the data they gather about you, I started wondering what I could do to make my internet traffic a bit harder for them to monetize. How would I prevent my ISP from selling details about my shopping habits and personal preferences to the highest bidder?"]},"\n",{type:"p",props:{},children:[{type:"i",props:{},children:[{type:"a",props:{href:"#first-steps"},children:["Or skip straight to how to do it."]}]}]},"\n",{type:"h3",props:{},children:["Why DNS and why should you care?"]},"\n",{type:"p",props:{},children:["Standards for encrypting web traffic have become widely adopted since their introduction in the late 90s. It's not my first day, so I knew that content sent over HTTPS would be difficult (but not impossible) for a third party to do much with, and I already use HTTPS-everywhere and Brave to help keep things on the up-and-up. Unfortunately, even exclusively using HTTPS doesn't mean that 100% of your traffic is encrypted and secure."]},"\n",{type:"p",props:{},children:['A crucially important part of how your computer or phone loads a website is completely unencrypted in practice. The Domain Name System, or DNS, is how your web browser knows how to find the domain "google.com" when you type ',{type:"code",props:{},children:["https://www.google.com"]}," into your browser's address bar, and DNS isn't normally encrypted. Anyone who handles the traffic can take a peek if they're so inclined."]},"\n",{type:"blockquote",props:{},children:["\n",{type:"p",props:{},children:["Ability plus incentive makes for easy temptation. DNS is an easy target if your ISP wanted to profit from a complete list of the websites you visited."]},"\n"]},"\n",{type:"p",props:{},children:['Even worse, an ISP could resolve a DNS entry for a different website altogether or send you to a "toll booth" captive portal for whatever nefarious reasons they could think of.']},"\n",{type:"p",props:{},children:["Which means that even if I took every reasonable precaution and always made sure ",{type:"code",props:{},children:["https"]}," was in the URL when buying John Tesh cd's on Amazon, watching John Tesh videos on Youtube, or posting updates to my John Tesh fanzine, Comcast would still be able to see the URLs of the pages and sell them to anyone who cared. That is unacceptable. My secret love of John Tesh is too precious for a greedy corporate entity to harvest for profits."]},"\n",{type:"a",props:{href:"../img/the-cyber.jpg"},children:["\n  ",{type:"img",props:{src:"/static/img/the-cyber.jpg",className:"w-60-l w-50-m w-100 ml3-ns fr-ns mt1 mb2 pa1 br1 ba b--rainbows"}},"\n"]},"\n",{type:"p",props:{},children:['Good thing for me, a bunch of smart folks who are well versed in "the cyber" had already thought this one through enough to write RFC standards for the DNS protocol that can make it much harder for a third party to see the paper trail of domains and URLs left by a furious session of John Tesh related browsing. Even better, these standards have been implemented with open source and are available to use for free, without too much overhead.']},"\n",{type:"p",props:{},children:["Unfortunately, encrypting your DNS isn't yet as ubiquitous or widely support as HTTPS, so there are still a few hoops to jump through if you want to start obfuscating this aspect of your web traffic."]},"\n",{type:"p",props:{},children:["It's also important to note that encrypting your DNS isn't a silver bullet with regards to online privacy. True privacy is a fleeting concept, or at least one that's impossible to make sane guarantees about. Like any encryption technology, it's only as strong as the implementation being used, and in recent years those have been known to be compromised with some degree of regularity. Even when you're encrypting your communications doesn't mean you should automatically trust the person on the other end of the line. Not to sound paranoid, but be careful about who you place blind trust in and always look before you leap."]},"\n",{type:"h3",props:{},children:["Enter DNSCrypt"]},"\n",{type:"p",props:{},children:["DNSCrypt is a great collection of software tools that let you get up and running with encrypted DNS really quickly. Don't take my word of it. Head over to dnscrypt.org for comprehensive info about what it is and all the ways you can use it."]},"\n",{type:"blockquote",props:{},children:["\n",{type:"p",props:{},children:["dnscrypt + httpseverywhere is 9/10s of a vpn imo"]},"\n"]},"\n",{type:"p",props:{className:"w-100 tr"},children:["\n— ",{type:"a",props:{href:"https://twitter.com/SlexAxton/status/853715217058025475"},children:["Alex Sexton, notable person on the internet"]},"\n"]},"\n",{type:"p",props:{},children:["DNSCrypt is a way to run an encrypted dns server and clients for every platform to connect with it. There are already plenty of servers around the world that you can connect to out-of-the-box with a gui clients, so getting up and running is super easy. And there are plenty of command line tools, too. Everything is open source and the community seems active, with multiple projects to choose from for most layers of tooling."]},"\n",{type:"p",props:{},children:["The client apps work by changing your network settings to use a dns server running DNSCrypt, and lets you quickly switch back and forth between your previous \"normal\" dns and an encrypted configuration. It does this by running a local dns server on your computer, which handles one end of the encryption and decryption, with the public server you're connecting with on the other end. Since all the traffic is encrypted on your computer before it's sent to the server, an intermediary like your ISP can't see the domain being requested."]},"\n",{type:"h3",props:{},children:["What's the catch? Why isn't this everywhere already?"]},"\n",{type:"p",props:{},children:["The catch is that ultimately your dns request will be served from an unencrypted (but authenticated) channel because the global network of DNS servers does not implement the DNSCrypt protocol."]},"\n",{type:"p",props:{},children:[{type:"a",props:{id:"first-steps"}}]},"\n",{type:"h3",props:{},children:["First steps"]},"\n",{type:"p",props:{},children:["Better instructions here: ",{type:"a",props:{href:"https://dnscrypt.org/"},children:["https://dnscrypt.org/"]}]},"\n",{type:"p",props:{},children:["Install the ",{type:"a",props:{href:"https://github.com/alterstep/dnscrypt-osxclient"},children:["dnscrypt-client"]}," and connect to one of the public nodes. I chose ",{type:"a",props:{href:"https://nxt.ist"},children:["https://nxt.ist"]},'. You can "trust" these because they issue keypairs or something(?) but, caveat emptor.']},"\n",{type:"p",props:{},children:["But roll with the thick client because it's convenient and you'll get to see what you're in for... which is pretty boring if you're not running ",{type:"code",props:{},children:["dig"]}," or ",{type:"code",props:{},children:["nslookup"]}," all the time to see where your DNS entries are coming from. But then again, it's pretty boring. But at least they're encrypted?"]},"\n",{type:"h3",props:{},children:["Paranoid mode: Roll your own DNSCrypt server"]},"\n",{type:"p",props:{},children:["I chose a droplet that came with Ubuntu 16.04 and Docker 1.17 pre-installed. Created a new keypair (always, always create a new keypair) and give it a good name, a static IPv4 address, and an IPv6 address if you hate yourself (or want to learn about docker's nightmare factory networking layer)."]},"\n",{type:"p",props:{},children:["SSH to the server and fire up the ",{type:"a",props:{href:"https://github.com/jedisct1/dnscrypt-server-docker"},children:["DNSCrypt Server Docker Image"]}," with the instructions from the README:"]},"\n",{type:"pre",props:{},children:[{type:"code",props:{className:"hljs language-bash"},children:["docker run --name=dnscrypt-server -p 443:443/udp -p 443:443/tcp \\\n    jedisct1/unbound-dnscrypt-server init -N example.com\n\ndocker start dnscrypt"]}]},"\n",{type:"p",props:{},children:["The first command returns a public key. You'll need this. It's also in your docker logs if you forget it ",{type:"code",props:{},children:["docker logs dnscrypt-server | head"]},"."]},"\n",{type:"p",props:{},children:["Now you have a server running, note the IP and setup a client to connect to it."]},"\n",{type:"h3",props:{},children:["Connecting clients with dnscrypt-proxy"]},"\n",{type:"p",props:{},children:["I tried 2 ways of connecting devices to my new dnscrypt server from my local network."]},"\n",{type:"p",props:{},children:[{type:"b",props:{},children:["1 - Run the proxy client everywhere"]}]},"\n",{type:"p",props:{},children:['Run dnscrypt-proxy on every device where you want encrypted dns, which makes a local dns server which sends encrypted requests to your server. This is the "safest" way of doing things because you\'re not trusting anyone else to do the encryption for you, making it a bit more difficult for someone to spy on your dns traffic.']},"\n",{type:"p",props:{},children:["Install it for mac with homebrew: ",{type:"code",props:{},children:["brew install dnscrypt-proxy"]}]},"\n",{type:"p",props:{},children:["Then connect to your server using the IP and public key:"]},"\n",{type:"pre",props:{},children:[{type:"code",props:{className:"hljs language-bash"},children:["sudo dnscrypt-proxy --provider-key=YOUR_PUBLIC_KEY \\\n  --resolver-address=YOUR_IPv4_ADDRESS:443 \\\n  --provider-name=2.dnscrypt-cert.example.com"]}]},"\n",{type:"p",props:{},children:['Now edit your DNS settings to point at your IP. This is actually really convenient if you\'re already using dnscrypt-client: in the "Advanced" tab, add your IP to the field labeled "When not using DNSCrypt, use the following static DNS servers". Now, when you turn off the DNSCrypt thick client, it will try to use the proxy you started from the command line.']},"\n",{type:"p",props:{},children:["It's a pain in the ass that you can't point to your own server on the client. There, I said it. Pull requests welcome, I guess?"]},"\n",{type:"p",props:{},children:[{type:"b",props:{},children:["2 - Run it from one place on your local network"]}]},"\n",{type:"p",props:{},children:["Run dnscrypt-proxy somewhere on your local network, and tell devices to use that as their source of truth for dns. If you trust your local network (which, depending on how many IOT devices you have running or you don't control router/modem settings, might not be a good idea,) then you can avoid extra process overhead and it works for phones and tablets."]},"\n",{type:"p",props:{},children:["Basically the same steps as above, but make sure that you start the dnscrypt-proxy client with ",{type:"code",props:{},children:["--local-address=0.0.0.0"]}," so that it broadcasts to your network."]},"\n",{type:"p",props:{},children:["And, uh, make sure your router doesn't liberally port forward or you'll live to regret it."]},"\n",{type:"p",props:{},children:["I did this on my ubuntu media server and I ran into dnsmasq issues, because ubuntu is stupid and runs a dnsmasq process as part of it's network stack, but it's not the \"real\" dnsmasq so you can't configure it to broadcast (go figure)."]},"\n",{type:"p",props:{},children:["To get everything working without just nuking the unconfigurable dnsmasq process, I had to run dnscrypt-proxy on another port, ",{type:"code",props:{},children:["127.0.0.1:40"]},' and then install the "real" dnsmasq, ',{type:"code",props:{},children:["sudo apt-get install dnsmasq"]}," and tell it to use dnscrypt-proxy as a nameserver. All this is from here, conveniently: ",{type:"a",props:{href:"https://wiki.debian.org/HowTo/dnsmasq"},children:["https://wiki.debian.org/HowTo/dnsmasq"]}]},"\n",{type:"pre",props:{},children:[{type:"code",props:{className:"hljs language-ini"},children:["no-resolv\nserver 127.0.0.1"]}]},"\n",{type:"p",props:{},children:["Then I switched all the dns settings on my phones and computers to point at the local ip of my media server for DNS, falling back to google's ",{type:"code",props:{},children:["8.8.8.8"]}," and ",{type:"code",props:{},children:["8.8.4.4"]}," to avoid being inconveninced if the process dies."]},"\n",{type:"h3",props:{},children:["Conclusion"]},"\n",{type:"div",props:{className:"fr-ns w-50-ns w-100 ml3-ns tc tl-ns bonzi-buddy"},children:["\n  ",{type:"a",props:{href:"https://en.wikipedia.org/wiki/BonziBuddy",target:"__blank",className:"none"},children:["\n    ",{type:"img",props:{src:"/static../img/bonzi-buddy.gif",className:"pa1"}},"\n  "]},"\n"]},"\n",{type:"p",props:{},children:["Encrypting DNS is boring, but satisfying."]},"\n",{type:"p",props:{},children:["Happy Hacking 🤓"]},"\n",{type:"div",props:{className:"cf"}}]};return i.default.createElement(h.default,t,i.default.createElement(d.default,(0,s.default)({},o,{components:y.default})))}}},[503]);
            return { page: comp.default }
          })
        