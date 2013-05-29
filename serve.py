import SimpleHTTPServer
import SocketServer
SimpleHTTPServer.SimpleHTTPRequestHandler.extensions_map['.webapp'] = 'application/x-web-app-manifest+json'
SimpleHTTPServer.SimpleHTTPRequestHandler.extensions_map['.appcache'] = 'text/cache-manifest'
httpd = SocketServer.TCPServer(("", 3000), SimpleHTTPServer.SimpleHTTPRequestHandler)
httpd.serve_forever()