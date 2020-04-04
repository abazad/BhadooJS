# CDN at jsDelivr [![](https://data.jsdelivr.com/v1/package/gh/ParveenBhadooOfficial/BhadooJS/badge)](https://www.jsdelivr.com/package/gh/ParveenBhadooOfficial/BhadooJS)

## Images, CSS, JS etc Assets Github CDN for Parveen Bhadoo Websites

## Important Links

To Generate SRI Hash visit [https://www.srihash.org](https://www.srihash.org) or [https://report-uri.com/home/sri_hash](https://report-uri.com/home/sri_hash)

Latest CDN Files with embed process [https://www.jsdelivr.com/package/gh/ParveenBhadooOfficial/BhadooJS](https://www.jsdelivr.com/package/gh/ParveenBhadooOfficial/BhadooJS)

Latest CDN Files with direct links [https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS/](https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS/)

### System Upgrade using Terminal on Linux Ubuntu

````
sudo apt-get update && sudo apt-get upgrade
sudo apt update && sudo apt upgrade
````

### Working with npm

Use Node.js command prompt as terminal
    
Create a package.json file with name and version where bhadoojs is Assets package name.
    
    {
    "name": "bhadoojs",
    "version": "1.0.0"
    }
    
Use Publish Command to Publish the Repo Publically
    
    npm publish --access=public
    
To delete a package use
    
    npm unpublish <package_name> -f --force

### Forward Emails from Domains using DNS and [ForwardMail.Net](https://forwardemail.net)

> <u>**IMPORTANT NOTE:**</u> Replace `niftylettuce@gmail.com` below with the email address you want to forward emails to:

**1.** Set the following DNS MX records on your domain name (having both is required):

| Name/Host/Alias    |  TTL | Record Type | Priority | Value/Answer/Destination |
| ------------------ | :--: | ----------- | -------- | ------------------------ |
| _@ or leave blank_ | 3600 | MX          | 10       | mx1.forwardemail.net     |
| _@ or leave blank_ | 3600 | MX          | 20       | mx2.forwardemail.net     |

> Note that there should be NO other MX records set on your domain name.  If there were already MX records that existed, please delete them completely.

**2.** Set (and customize) the following DNS TXT records on your domain name:

> If you are forwarding all emails from your domain, (`all@niftylettuce.com`, `hello@niftylettuce.com`, etc) to a specific address `niftylettuce@gmail.com`:

| Name/Host/Alias    |  TTL | Record Type | Value/Answer/Destination               |
| ------------------ | :--: | ----------- | -------------------------------------- |
| _@ or leave blank_ | 3600 | TXT         | `forward-email=niftylettuce@gmail.com` |

> If you just need to forward a single email address (e.g. `hello@niftylettuce.com` to `niftylettuce@gmail.com`; this will also forward `hello+test@niftylettuce.com` to `niftylettuce+test@gmail.com` automatically):

| Name/Host/Alias    |  TTL | Record Type | Value/Answer/Destination                     |
| ------------------ | :--: | ----------- | -------------------------------------------- |
| _@ or leave blank_ | 3600 | TXT         | `forward-email=hello:niftylettuce@gmail.com` |

> If you are forwarding multiple emails, then you'll want to separate them with a comma:

| Name/Host/Alias    |  TTL | Record Type | Value/Answer/Destination                                                    |
| ------------------ | :--: | ----------- | --------------------------------------------------------------------------- |
| _@ or leave blank_ | 3600 | TXT         | `forward-email=hello:niftylettuce@gmail.com,support:niftylettuce@gmail.com` |

> As of November 2, 2018 we now have added support for multi-line TXT records!  You can now have an infinite amount of forwarding emails setup – just make sure to not wrap over 255 characters in a single-line and start each line with `forward-email=`.  An example is provided below:

| Name/Host/Alias    |  TTL | Record Type | Value/Answer/Destination                                                    |
| ------------------ | :--: | ----------- | --------------------------------------------------------------------------- |
| _@ or leave blank_ | 3600 | TXT         | `forward-email=hello:niftylettuce@gmail.com,support:niftylettuce@gmail.com` |
| _@ or leave blank_ | 3600 | TXT         | `forward-email=help:niftylettuce@gmail.com,foo:niftylettuce@gmail.com`      |
| _@ or leave blank_ | 3600 | TXT         | `forward-email=orders:niftylettuce@gmail.com,baz:niftylettuce@gmail.com`    |
| _@ or leave blank_ | 3600 | TXT         | `forward-email=info:niftylettuce@gmail.com,beep:niftylettuce@gmail.com`     |
| _@ or leave blank_ | 3600 | TXT         | `forward-email=errors:niftylettuce@gmail.com,boop:niftylettuce@gmail.com`   |

**3.** Set (and customize) the following SPF record for SPF verification for your domain name (this will allow SPF verification to pass, note that you may need to enclose this value in quotes if you are using Amazon Route53):

> Note that if you are using a service such as GoDaddy, you will need to use a TXT record type instead of an SPF record for this step.
>
> If you're using a service like AWS Route 53, then edit your existing TXT record and add the following as a new line:

| Name/Host/Alias    |  TTL | Record Type | Value/Answer/Destination                        |
| ------------------ | :--: | ----------- | ----------------------------------------------- |
| _@ or leave blank_ | 3600 | SPF         | `v=spf1 a mx include:spf.forwardemail.net -all` |

> :warning: If you are using Google Apps, you'll need to append `include:_spf.google.com` to the value above – e.g. `v=spf1 a mx include:spf.forwardemail.net include:_spf.google.com -all`.
>
> If you already have a similar line with `v=spf1`, then you'll need to append `include:spf.forwardemail.net` right before any existing `include:host.com` records and before the `-all` in the same line (e.g. `v=spf1 a mx include:spf.forwardemail.net include:host.com -all`).
>
> Note that there is a difference between `-all` and `~all`.  The `-` indicates that the SPF check should FAIL if it does not match, and `~` indicates that the SPF check should SOFTFAIL.  We recommend to use the `-all` approach to prevent domain forgery.

**4.** Send a test email to confirm it works.  Note that it might take some time for your DNS records to propagate.

**5.** Add `no-reply@forwardemail.net` to your contacts.  In the event that someone is attempting to send you an email that has a strict DMARC record policy of `reject` or `quarantine`, we will rewrite the email's `From` header with a "friendly-from".  This means the `From` will look like `Sender's Name <no-reply@forwardemail.net>` and a `Reply-To` will be added with the original sender's `From` address.  In the event that there is already a `Reply-To` set, we will not overwrite it.

**6.** If you wish to "Send Mail As" from Gmail, then you will need to follow the steps under [Send Mail As Using Gmail](#send-mail-as-using-gmail) below.

---

_Optional Add-ons:_

* Add a DMARC record for your domain name by following the instructions at <https://dmarc.postmarkapp.com> (this will allow DMARC verification to pass)
* If the email lands in your spam folder (which it should not), you can whitelist it (e.g. here are instructions for Google <https://support.google.com/a/answer/60751?hl=en&ref_topic=1685627>)
* Add the ability to "Send Mail As" from Gmail by following [Send Mail As Using Gmail](#send-mail-as-using-gmail) below

For more Visit [ForwardMail.Net](https://forwardemail.net)

### Favicons

    <link rel="apple-touch-icon" sizes="180x180" href="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.9/icons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.9/icons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.9/icons/favicon-16x16.png">
    <link rel="mask-icon" href="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.9/icons/safari-pinned-tab.svg" color="#5bbad5">

    <meta name="theme-color" content="#ffffff">

### Manifest

    <link rel="manifest" href="/manifest.json">

### CSS

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.0/css/www.parveenbhadoo.com-style.css" integrity="sha256-EhL/IMvZa5DwzmsarclMHI3TA2IChEAxZ2+wn2DCjs4=" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.0/css/www.parveenbhadoo.com-ad.css" integrity="sha256-BnKXO8kDyWDdxCgvcl+JVzJ8WjMURxEMSFS4IEn55K4=" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.0/css/moving_letters.css" integrity="sha256-cyVURb2tECL2r3+xDTpQ+JIjKw6jkfS8+nHhmHTidEU=" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.0/css/mail.bhadoomail.com_style.css" integrity="sha256-aqJaGIKnBc7mAfLGINJsyWGd6lDYfoIiISSxa5ZFVW8=" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.0/css/mail-box-style.css" integrity="sha256-MXCVuCLGn34iVReQoHZzuEi5fjt0WH3YGxMUrRsGpgU=" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.0/css/mail.bhadoomail.com_spinner.css" integrity="sha256-M9iAceT2XtYI6xsDfOa+/TsZmPGcjLj5ddd7dFkOofw=" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.0/css/mail.bhadoomail.com_bootstrap.min.css" integrity="sha256-PCsx7lOyGhyGmzsO5MGXhzwV6UpNTlNf1p6V6w2CppQ=" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.0/css/classic-button.css" integrity="sha256-2O3BzKqYcXKGjs+J3+o9xNpfM0E2iKYC69I6oI73Yoc=" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.0/css/bootstrap-v4.0.0.min.css" integrity="sha256-CJWHkXDf0tSx55QlfoAyOCW7dUiNDUBTET6oLZWQCkM=" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.0/css/bhadootelecom-com-homepage.css" integrity="sha256-j9kjOU6norMKEcULagWlKi3m05zYX/ccKwdW6gCz4R0=" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.0/css/404.css" integrity="sha256-F55vJXRkVgrQTNbO3v37sYqO1qL9tFi9unlp1Y5Acgg=" crossorigin="anonymous">

### JS

    <script src="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.6/js/copy-click-on-button-code.js" integrity="sha256-DN8Abv8u8YT3P4PCX9xXKK9agjfXnh8l96HDJrvfMdw=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.6/js/moving_letters.js" integrity="sha256-vsT/O4UwBOCW/wFrub/ElsjIpt9SkA8krEAexkdtmKk=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.6/js/wa.hashhackers.com_autoads.js" integrity="sha256-VNqgkYaW/fxioqLeUVrGAVdrLH5KLThYAat0n0oJys4=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.6/js/wa.hashhackers.com_process.js" integrity="sha256-AnZKxmjRh26gm+VoWSJiR/2XUltqbFE+gv5hS5wMq/A=" crossorigin="anonymous"></script>
    
### Images

    <img border="0" alt="Hash Hackers" src="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.9/images/hashhackers_logo.png" width="200px" height="auto">
    <img border="0" alt="Hash Hackers" src="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.9/images/hashhackers_logo.webp?active" width="200px" height="auto">
    <img border="0" alt="Hash Hackers" src="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.9/images/bhadoomail_logo.png?active" width="200px" height="auto">

### APK Files Version in Ascending Order

[MX_Player_Pro_1.10.47.apk](https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.21/apk/MX_Player_Pro_1.10.47_Bhadoo.apk)

    <a href="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.8/apk/MX_Player_Pro_1.9.24.apk">MX_Player_Pro_1.9.24.apk</a>

### WordPress on Lightsail

* Find Password of WordPress

`cat ./bitnami_credentials`

* Remove Banner from Site

`sudo /opt/bitnami/apps/wordpress/bnconfig --disable_banner 1`

* If you’re using Bitnami, execute the command below to restart all service:

`sudo /opt/bitnami/ctlscript.sh restart`

* [Link for SSL on Nginx WordPress](https://docs.bitnami.com/virtual-machine/how-to/generate-install-lets-encrypt-ssl/#alternative-approach)

* http to HTTPS Redirect after installing `Simple SSL` Plugin

`sudo nano /opt/bitnami/apps/wordpress/conf/htaccess.conf`

and add these lines

````
# BEGIN rlrssslReallySimpleSSL rsssl_version[3.2.9]
<IfModule mod_rewrite.c>
RewriteEngine on
RewriteCond %{HTTP:CF-Visitor} '"scheme":"http"'
RewriteRule ^(.*)$ https://%{HTTP_HOST}/$1 [R=301,L]
</IfModule>
# END rlrssslReallySimpleSSL
````

* Set wp-config.php Writable

`sudo chmod 664 /opt/bitnami/apps/wordpress/htdocs/wp-config.php`

`sudo /opt/bitnami/ctlscript.sh restart`

* Block Direct IP Access

Make Error Handling Page

`sudo mkdir /opt/bitnami/apps/wordpress/htdocs/ip`
        
`sudo nano /opt/bitnami/apps/wordpress/htdocs/ip/index.html`
        
Add the content you want to display

`sudo chmod -R 777 /opt/bitnami/apps/wordpress/htdocs/ip`
        
Edit this config file

`sudo nano /opt/bitnami/apps/wordpress/conf/httpd-vhosts.conf`

replace domain and ip with your own data

```
<VirtualHost *:80>
ServerName example.com
ServerAlias www.example.com
DocumentRoot "/opt/bitnami/apps/wordpress/htdocs"
Include "/opt/bitnami/apps/wordpress/conf/httpd-app.conf"
</VirtualHost>

<VirtualHost *:443>
ServerName example.com
ServerAlias www.example.com
DocumentRoot "/opt/bitnami/apps/wordpress/htdocs"
SSLEngine on
SSLCertificateFile "/opt/bitnami/apache2/conf/server.crt"
SSLCertificateKeyFile "/opt/bitnami/apache2/conf/server.key"
Include "/opt/bitnami/apps/wordpress/conf/httpd-app.conf"
</VirtualHost>

<VirtualHost *:80>
ServerName xxx.xxx.xxx.xxx
ServerAlias *
DocumentRoot "/opt/bitnami/apps/wordpress/htdocs/ip"
Include "/opt/bitnami/apps/wordpress/conf/httpd-app.conf"
</VirtualHost>
        
<VirtualHost *:443>
ServerName xxx.xxx.xxx.xxx
ServerAlias *
DocumentRoot "/opt/bitnami/apps/wordpress/htdocs/ip"
Include "/opt/bitnami/apps/wordpress/conf/httpd-app.conf"
</VirtualHost>
```

add above file in bitnami config

`sudo nano /opt/bitnami/apache2/conf/bitnami/bitnami-apps-vhosts.conf`

in here add this line

`Include "/opt/bitnami/apps/wordpress/conf/httpd-vhosts.conf"`

to apply these setting use

`sudo /opt/bitnami/ctlscript.sh restart`

### Google Group for Sharing Team Drive

* [Open](https://groups.google.com/forum/#!overview)
* Create Group
* Set below settings about who can do what [Image Here](https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@master/images/group-settings.PNG)
* Click on Create.
* Then go to [My Groups](https://groups.google.com/forum/#!myforums)
* Open your Group
* Click on Manage Group
* Disallow Posting options
* On Left Panel Click on Group visibility
* Set to Anyone on the Web
* On Left Panel Click on Basic Permissions under Permissons Tab [Image Here](https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@master/images/basicpermissions.PNG)
* Set it as you want to.
* Click on Set Welcome Message to Welcome Users to Group.

### Disable Deletion and Deactivation of WordPress Plugins

````
/**
 * Remove Delete/Disable Action for Plugins
 * https://wordpress.org/support/topic/disable-delete-option-for-plugins/
 * @param $actions
 * @param $plugin_file
 * @param $plugin_data
 * @param $context
 * @return mixed
 */
function bhadoo_disable_plugin_deletion( $actions, $plugin_file, $plugin_data, $context ) {

    // Remove delete link for plugins
    if ( array_key_exists( 'delete', $actions ) && in_array( $plugin_file, array(
        'akismet/akismet.php',
		'jetpack/jetpack.php',
        'all-in-one-wp-migration/all-in-one-wp-migration.php',
		'all-in-one-wp-migration-gdrive-extension/all-in-one-wp-migration-gdrive-extension.php',
		'wp-mail-smtp-pro/wp_mail_smtp.php',
		'really-simple-ssl/rlrsssl-really-simple-ssl.php'
    ) ) )
        unset( $actions['delete'] );

    return $actions;
}
add_filter( 'plugin_action_links', 'bhadoo_disable_plugin_deletion', 10, 4 );

function bhadoo_disable_plugin_deactivation( $actions, $plugin_file, $plugin_data, $context ) {

    // Remove delete link for plugins
    if ( array_key_exists( 'deactivate', $actions ) && in_array( $plugin_file, array(
        'akismet/akismet.php',
		'jetpack/jetpack.php',
        'all-in-one-wp-migration/all-in-one-wp-migration.php',
		'all-in-one-wp-migration-gdrive-extension/all-in-one-wp-migration-gdrive-extension.php',
		'wp-mail-smtp-pro/wp_mail_smtp.php',
		'really-simple-ssl/rlrsssl-really-simple-ssl.php'
    ) ) )
        unset( $actions['deactivate'] );

    return $actions;
}
add_filter( 'plugin_action_links', 'bhadoo_disable_plugin_deactivation', 10, 4 );
````

### Rapidleech [RAR Fix](https://github.com/Th3-822/rapidleech/issues/71)

````
cd /var/www/html
````

````
sudo rm -rf rar && sudo wget https://rarlab.com/rar/rarlinux-x64-5.6.0.tar.gz && sudo tar -xvf rarlinux-x64-5.6.0.tar.gz && sudo rm -f rarlinux-x64-5.6.0.tar.gz && sudo chmod -R 777 rar && sudo chmod -R 777 rar/*
````
### LAMP on Ubuntu - [Source](https://web.archive.org/web/20180323030918/https://howtoubuntu.org/how-to-install-lamp-on-ubuntu)

````
sudo apt-get install apache2
sudo apt-get install mysql-server
sudo apt-get install php5 libapache2-mod-php5 && sudo apt-get install phplibapache2-mod-php && sudo apt-get install php
sudo /etc/init.d/apache2 restart
php -r 'echo "\n\nYour PHP installation is working fine.\n\n\n";'
cd /var/www/html
````

Open Source Project by [Parveen Bhadoo](https://www.parveenbhadoo.com)
