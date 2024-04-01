const puppeteer = require('puppeteer');

async function takeScreenshot(url, clip, filePath) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  console.log(`Navigating to ${url}`);
  await page.goto(url, { waitUntil: 'domcontentloaded' });

  // Wait for 5 seconds (adjust the time as needed)
  await page.waitForTimeout(5000);

  console.log(`Taking screenshot for ${url}`);
  await page.screenshot({ path: filePath, clip });
  console.log(`Screenshot saved to ${filePath}`);

  // Close the browser after taking the screenshot
  await browser.close();
}

async function main() {
  const screenshots = [
    { url: 'https://www.surfline.com/surf-report/t-street/5842041f4e65fad6a7708830?camId=5834a191e411dc743a5d52f1', clip: { x: 0, y: 1530, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Shane.png' },
    { url: 'https://www.surfline.com/surf-report/upper-trestles/5842041f4e65fad6a7708887', clip: { x: 0, y: 1530, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Wyatt.png' },
    { url: 'https://www.surfline.com/surf-report/salt-creek/5842041f4e65fad6a770882e?camId=643256b92ece86fff9dd8640', clip: { x: 0, y: 1530, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Tonya.png' },
    { url: 'https://www.surfline.com/surf-report/the-wedge/5842041f4e65fad6a770882b?camId=5834a1613421b20545c4b591', clip: { x: 0, y: 1530, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Wade.png' },
    { url: 'https://www.surfline.com/surf-report/north-hb-streets/5842041f4e65fad6a77088ea?camId=58235706302ec90c4108c3e4', clip: { x: 0, y: 1530, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/KevinDo.png' },
    { url: 'https://www.surfline.com/surf-report/upper-trestles/5842041f4e65fad6a7708887', clip: { x: 0, y: 1530, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/DJ Bonez.png' },
    { url: 'https://www.surfline.com/surf-report/salt-creek/5842041f4e65fad6a770882e?camId=643256b92ece86fff9dd8640', clip: { x: 0, y: 1530, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Mike Saedi.png' },
    { url: 'https://www.surfline.com/surf-report/margate-pier-northside/5842041f4e65fad6a7708a08', clip: { x: 0, y: 1530, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Mark R Howell.png' },
    { url: 'https://www.surfline.com/surf-report/church/5842041f4e65fad6a770888b?camId=599b3a435a46a5d8045a0cf6', clip: { x: 0, y: 1500, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Jeffrey Werve.png' },
    { url: 'https://www.surfline.com/surf-report/san-onofre-state-beach/584204204e65fad6a77099d4?camId=58349e583421b20545c4b567', clip: { x: 0, y: 1560, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Dennis Carlson.png' },
    { url: 'https://www.surfline.com/surf-report/1st-street-jetty/584204214e65fad6a7709ce7?camId=583494523421b20545c4b518', clip: { x: 0, y: 1560, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Jay Schifrin.png' },
    { url: 'https://www.surfline.com/surf-report/del-mar/5842041f4e65fad6a77088af?camId=583497cf3421b20545c4b534', clip: { x: 0, y: 1540, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Jimmy Glass.png' },
    { url: 'https://www.surfline.com/surf-report/tybee-island-pier/5842041f4e65fad6a7708a6f', clip: { x: 0, y: 1350, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/parker josh.png' },
    { url: 'https://www.surfline.com/surf-report/jacksonville-beach-pier/5842041f4e65fad6a7708aa0', clip: { x: 0, y: 1530, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Gordon Craddock.png' },
    { url: 'https://www.surfline.com/surf-report/carolina-beach-pier/5842041f4e65fad6a7708a49?camId=583496e43421b20545c4b52b', clip: { x: 0, y: 1560, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Michael payne.png' },
    { url: 'https://www.surfline.com/surf-report/sunglow-pier/5842041f4e65fad6a7708a9a', clip: { x: 0, y: 1350, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Justin.png' },
    { url: 'https://www.surfline.com/surf-report/indian-rocks-beach/5842041f4e65fad6a7708b0c', clip: { x: 0, y: 1350, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/A.J. Comparetto.png' },
    { url: 'https://www.surfline.com/surf-report/deerfield-beach-pier/5842041f4e65fad6a770887d', clip: { x: 0, y: 1575, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Richard Duharte.png' },
    { url: 'https://www.surfline.com/surf-report/1st-street-jetty/584204214e65fad6a7709ce7?camId=583494523421b20545c4b518', clip: { x: 0, y: 1575, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Linda Conner.png' },
    { url: 'https://www.surfline.com/surf-report/daytona-beach/5842041f4e65fad6a7708aa2', clip: { x: 0, y: 1575, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Robert Bob Snyder.png' },
    { url: 'https://www.surfline.com/surf-report/west-end-long-beach/584204214e65fad6a7709d21', clip: { x: 0, y: 1350, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Bob young.png' },
    { url: 'https://www.surfline.com/surf-report/cocoa-beach-pier/5842041f4e65fad6a7708872?camId=5834972ce411dc743a5d527b', clip: { x: 0, y: 1575, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Curtis Richard.png' },
    { url: 'https://www.surfline.com/surf-report/waikiki-beach/584204204e65fad6a7709148?camId=5d24cc0b3ea3012c99da7808', clip: { x: 0, y: 1575, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Hilton Ishimoto.png' },
    { url: 'https://www.surfline.com/surf-report/river-jetties/5842041f4e65fad6a77088ee?camId=5834a0223421b20545c4b581', clip: { x: 0, y: 1575, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Kevin Walshe.png' },
    { url: 'https://www.surfline.com/surf-report/1st-street-jetty/584204214e65fad6a7709ce7?camId=583494523421b20545c4b518', clip: { x: 0, y: 1560, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/John(Hockey).png' },
    { url: 'https://www.surfline.com/surf-report/blackies/584204204e65fad6a7709115?camId=582355e11ee905c72145623c', clip: { x: 0, y: 1530, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/PJSurfside.png'},
    { url: 'https://www.surfline.com/surf-report/oceanside-pier/5842041f4e65fad6a7708835?camId=58349e42e411dc743a5d52c4', clip: { x: 0, y: 1530, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/John Good.png' },
    { url: 'https://www.surfline.com/surf-report/jacksonville-beach-pier/5842041f4e65fad6a7708aa0', clip: { x: 0, y: 1530, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Nomoresurfmusic.png' },
    { url: 'https://www.surfline.com/surf-report/huntington-beach-pier-northside/5842041f4e65fad6a7708827?camId=583499c4e411dc743a5d5296', clip: { x: 0, y: 1530, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/CaseyGreen.png' },
    { url: 'https://www.surfline.com/surf-report/blackies/584204204e65fad6a7709115?camId=582355e11ee905c72145623c', clip: { x: 0, y: 1530, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/AprilLAnd.png' },
    { url: 'https://www.surfline.com/surf-report/blackies/584204204e65fad6a7709115?camId=582355e11ee905c72145623c', clip: { x: 0, y: 1530, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/ChristosPapageorgiou.png' },
    { url: 'https://www.surfline.com/surf-report/newport-upper-jetties/5842041f4e65fad6a7708e54?camId=583494b1e411dc743a5d5268', clip: { x: 0, y: 1530, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/RileyBrown.png' },
    { url: 'https://www.surfline.com/surf-report/manhattan-beach-pier/5842041f4e65fad6a7708907?camId=58349c353421b20545c4b555', clip: { x: 0, y: 1530, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Jaylee Carpenter.png' },
    { url: 'https://www.surfline.com/surf-report/pismo-beach-pier/5842041f4e65fad6a77089ac?camId=58349f0ae411dc743a5d52ce', clip: { x: 0, y: 1530, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Sven.png' },
    { url: 'https://www.surfline.com/surf-report/key-west/584204214e65fad6a7709d11', clip: { x: 0, y: 1330, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Shely Walters.png' },
    { url: 'https://www.surfline.com/surf-report/ocean-city-boardwalk/5842041f4e65fad6a770886d?camId=58349e1fe411dc743a5d52c0', clip: { x: 0, y: 1530, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Joseph Valdivia.png' },
    { url: 'https://www.surfline.com/surf-report/jacksonville-beach-pier/5842041f4e65fad6a7708aa0', clip: { x: 0, y: 1530, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Michael Bensusen.png' },
    { url: 'https://www.surfline.com/surf-report/36th-street-to-42nd-street/5842041f4e65fad6a7708b5c', clip: { x: 0, y: 1350, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Jason Lure.png' },
    { url: 'https://www.surfline.com/surf-report/waikiki-beach/584204204e65fad6a7709148?camId=5d24cc0b3ea3012c99da7808', clip: { x: 0, y: 1575, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Philly Phresh.png' },
    { url: 'https://www.surfline.com/surf-report/navarre-beach/5842041f4e65fad6a7708afd', clip: { x: 0, y: 1350, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Garrison Guay.png' },
    { url: 'https://www.surfline.com/surf-report/ponce-inlet/5842041f4e65fad6a7708a9d', clip: { x: 0, y: 1575, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/David Portwood.png' },
    { url: 'https://www.surfline.com/surf-report/surfside-beach/640a4481b6d7691557526fff', clip: { x: 0, y: 1375, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Ryan Hopson.png' },
    { url: 'https://www.surfline.com/surf-report/ocean-city-boardwalk/5842041f4e65fad6a770886d?camId=58349e1fe411dc743a5d52c0', clip: { x: 0, y: 1530, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Chris c.png' },
    { url: 'https://www.surfline.com/surf-report/el-porto/5842041f4e65fad6a7708906?camId=58349927e411dc743a5d5289', clip: { x: 0, y: 1530, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Chris G.png' },
    { url: 'https://www.surfline.com/surf-report/turners-beach/584204204e65fad6a7709304', clip: { x: 0, y: 1330, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Veronica Turner.png' },
    { url: 'https://www.surfline.com/surf-report/sebastian-inlet/5842041f4e65fad6a7708a9f?camId=58a376f6c9d273fd4f581bef', clip: { x: 0, y: 1530, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Randy Richard.png' },
    { url: 'https://www.surfline.com/surf-report/makapu-u/5842041f4e65fad6a7708b3c', clip: { x: 0, y: 1300, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Tai Chi.png' },
    { url: 'https://www.surfline.com/surf-report/atlantic-beach/5842041f4e65fad6a7708a98', clip: { x: 0, y: 1530, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Jerry Holland.png' },
    { url: 'https://www.surfline.com/surf-report/sunset-beach/5842041f4e65fad6a770888d?camId=5834a1003421b20545c4b58e', clip: { x: 0, y: 1530, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Kyle Barnes.png' },
    // Add more URLs and configurations as needed
  ];

  for (const { url, clip, filePath } of screenshots) {
    await takeScreenshot(url, clip, filePath);
  }

  console.log('All screenshots taken.');
}

main();











































// users who opted out
    // { url: 'https://www.surfline.com/surf-report/oceanside-pier/5842041f4e65fad6a7708835?camId=58349e42e411dc743a5d52c4', clip: { x: 0, y: 1530, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/John Good.png' },
    // { url: 'https://www.surfline.com/surf-report/jacksonville-beach-pier/5842041f4e65fad6a7708aa0', clip: { x: 0, y: 1530, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Nomoresurfmusic.png' },
    // { url: 'https://www.surfline.com/surf-report/huntington-beach-pier-northside/5842041f4e65fad6a7708827?camId=583499c4e411dc743a5d5296', clip: { x: 0, y: 1530, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/CaseyGreen.png' },
    // { url: 'https://www.surfline.com/surf-report/blackies/584204204e65fad6a7709115?camId=582355e11ee905c72145623c', clip: { x: 0, y: 1530, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/AprilLAnd.png' },
    // { url: 'https://www.surfline.com/surf-report/blackies/584204204e65fad6a7709115?camId=582355e11ee905c72145623c', clip: { x: 0, y: 1530, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/ChristosPapageorgiou.png' },
    // { url: 'https://www.surfline.com/surf-report/newport-upper-jetties/5842041f4e65fad6a7708e54?camId=583494b1e411dc743a5d5268', clip: { x: 0, y: 1530, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/RileyBrown.png' },
    // { url: 'https://www.surfline.com/surf-report/manhattan-beach-pier/5842041f4e65fad6a7708907?camId=58349c353421b20545c4b555', clip: { x: 0, y: 1530, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Jaylee Carpenter.png' },
    // { url: 'https://www.surfline.com/surf-report/pismo-beach-pier/5842041f4e65fad6a77089ac?camId=58349f0ae411dc743a5d52ce', clip: { x: 0, y: 1530, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Sven.png' },
    // { url: 'https://www.surfline.com/surf-report/key-west/584204214e65fad6a7709d11', clip: { x: 0, y: 1330, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Shely Walters.png' },
    // { url: 'https://www.surfline.com/surf-report/ocean-city-boardwalk/5842041f4e65fad6a770886d?camId=58349e1fe411dc743a5d52c0', clip: { x: 0, y: 1530, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Joseph Valdivia.png' },
    // { url: 'https://www.surfline.com/surf-report/jacksonville-beach-pier/5842041f4e65fad6a7708aa0', clip: { x: 0, y: 1530, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Michael Bensusen.png' },
    // { url: 'https://www.surfline.com/surf-report/36th-street-to-42nd-street/5842041f4e65fad6a7708b5c', clip: { x: 0, y: 1350, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Jason Lure.png' },
    // { url: 'https://www.surfline.com/surf-report/waikiki-beach/584204204e65fad6a7709148?camId=5d24cc0b3ea3012c99da7808', clip: { x: 0, y: 1575, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Philly Phresh.png' },
    // { url: 'https://www.surfline.com/surf-report/navarre-beach/5842041f4e65fad6a7708afd', clip: { x: 0, y: 1350, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Garrison Guay.png' },
    // { url: 'https://www.surfline.com/surf-report/ponce-inlet/5842041f4e65fad6a7708a9d', clip: { x: 0, y: 1575, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/David Portwood.png' },
    // { url: 'https://www.surfline.com/surf-report/surfside-beach/640a4481b6d7691557526fff', clip: { x: 0, y: 1375, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Ryan Hopson.png' },
    // { url: 'https://www.surfline.com/surf-report/ocean-city-boardwalk/5842041f4e65fad6a770886d?camId=58349e1fe411dc743a5d52c0', clip: { x: 0, y: 1530, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Chris c.png' },
    // { url: 'https://www.surfline.com/surf-report/el-porto/5842041f4e65fad6a7708906?camId=58349927e411dc743a5d5289', clip: { x: 0, y: 1530, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Chris G.png' },
    // { url: 'https://www.surfline.com/surf-report/turners-beach/584204204e65fad6a7709304', clip: { x: 0, y: 1330, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Veronica Turner.png' },
    // { url: 'https://www.surfline.com/surf-report/sebastian-inlet/5842041f4e65fad6a7708a9f?camId=58a376f6c9d273fd4f581bef', clip: { x: 0, y: 1530, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Randy Richard.png' },
    // { url: 'https://www.surfline.com/surf-report/makapu-u/5842041f4e65fad6a7708b3c', clip: { x: 0, y: 1300, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Tai Chi.png' },
    // { url: 'https://www.surfline.com/surf-report/atlantic-beach/5842041f4e65fad6a7708a98', clip: { x: 0, y: 1530, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Jerry Holland.png' },
    // { url: 'https://www.surfline.com/surf-report/sunset-beach/5842041f4e65fad6a770888d?camId=5834a1003421b20545c4b58e', clip: { x: 0, y: 1530, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Kyle Barnes.png' },
   // { url: 'https://www.surfline.com/surf-report/the-wedge/5842041f4e65fad6a770882b?camId=5834a1613421b20545c4b591', clip: { x: 0, y: 1530, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Marc.png' },
    // { url: 'https://www.surfline.com/surf-report/the-wedge/5842041f4e65fad6a770882b?camId=5834a1613421b20545c4b591', clip: { x: 0, y: 1530, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/Gio.png' }, 
    // { url: 'https://www.surfline.com/surf-report/lavallette/5842041f4e65fad6a7708a16', clip: { x: 0, y: 1300, width: 400, height: 295 }, filePath: '/Users/wadegoodman/Desktop/JohnFata.png' },
 