https://www.strava.com/oauth/authorize?client_id=139324&response_type=code&redirect_uri=http://localhost/exchange_token&approval_prompt=force&scope=read_all,profile:read_all,activity:read_all,profile:write,activity:write

http://localhost/exchange_token?state=&code=808ffc1961873442a96dbd6da3786a0449b4e6b6&scope=read,activity:write,activity:read_all,profile:write,profile:read_all,read_all


curl -X POST https://www.strava.com/oauth/token -F client_id=139324 -F client_secret=aff809fc160a0a1361817106193159b2dbbdc799 -F code=808ffc1961873442a96dbd6da3786a0449b4e6b6 -F grant_type=authorization_code

{"token_type":"Bearer","expires_at":1730759656,"expires_in":21601,"refresh_token":"4810ae9ca1142b335672bbda6a5faf737b44b81c","access_token":"b5849e35e24f634bb8b95cacb8b2015822ff5a4b","athlete":{"id":151451017,"username":null,"resource_state":2,"firstname":"峰","lastname":"于","bio":null,"city":"Dongcheng","state":"Beijing","country":"China","sex":"M","premium":false,"summit":false,"created_at":"2024-11-04T04:36:32Z","updated_at":"2024-11-04T16:05:45Z","badge_type_id":0,"weight":null,"profile_medium":"avatar/athlete/medium.png","profile":"avatar/athlete/large.png","friend":null,"follower":null}}

python3 run_page/strava_sync.py 139324 aff809fc160a0a1361817106193159b2dbbdc799 4810ae9ca1142b335672bbda6a5faf737b44b81c

python3 run_page/gen_svg.py --from-db --title "跑起来" --type github --athlete "大峰" --special-distance 3 --special-distance2 5 --special-color yellow --special-color2 red --output assets/github.svg --use-localtime --min-distance 0.5

python3 run_page/gen_svg.py --from-db --title "跑一跑" --type grid --athlete "大峰"  --output assets/grid.svg --min-distance 0.5 --special-color yellow --special-color2 red --special-distance 3 --special-distance2 5 --use-localtime

python3 run_page/gen_svg.py --from-db --type circular --use-localtime
