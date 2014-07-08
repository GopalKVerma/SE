<?php
session_start();
require_once("twitteroauth/twitteroauth.php");

// Replace the keys below - Go to https://dev.twitter.com/apps to create the Application
$consumerkey = "83N0tm7aVIpeRJJVvNmnA";
$consumersecret = "6l6JtlHzy9obCMisFiDWOotS9gLT9Fd39GrGCfeUe1I";
$accesstoken = "188851714-A6jKlcS0iujqkdIBmHVwRDEvSKcr1BcsphHLfGju";
$accesssecret = "3NfSp15Ir8kO5ehIYXifiSNSXDsev1p3Haf7MoNcMUD9N";


#$twitteruser = $_GET['twitteruser'];
#$notweets = $_GET['notweets'];
$twitteruser = "tutorialspoint";
$notweets = 3;

function getConnectionWithAccessToken($cons_key, $cons_secret, $oauth_token, $oauth_token_secret) {
	$connection = new TwitterOAuth($cons_key, $cons_secret, $oauth_token, $oauth_token_secret);
	return $connection;
}

$connection = getConnectionWithAccessToken($consumerkey, $consumersecret, $accesstoken, $accesssecret);
$tweets = $connection->get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=".$twitteruser."&count=".$notweets);

echo json_encode($tweets);
?>
