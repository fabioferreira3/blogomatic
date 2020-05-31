import sys
from deploy import deploy

print("Starting Poupança Hoje Deployment!")

args = sys.argv[1:]

if args:
    commitmsg = args[0]
    deploy(commitmsg, "poupancahoje")
else:
    print("Please provide a commit message")
