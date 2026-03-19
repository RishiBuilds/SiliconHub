git add assets/
git commit -m "feat(assets): add product and brand images" -m "Added all high-resolution images for products (cooling fans, GPUs, motherboards, processors, RAM, SSDs) and necessary brand assets."
git add css/styles.css
git commit -m "feat(style): implement core styling and animations" -m "Implemented main CSS styles including layout, typography (Inter & Outfit), text-animations, hover effects, and responsive media queries."
git add js/main.js
git commit -m "feat(core): add main javascript logic and cart management" -m "Added main logic for the hero carousel slider, search routing, cookie-based cart management, custom popups, and the invoice print generator."
git add login.html js/auth.js
git commit -m "feat(auth): create login interface with captcha" -m "Created a login form with a custom canvas-based CAPTCHA verification system and basic admin routing."
git rm index.htm --ignore-unmatch 2>$null
git add .
git commit -m "feat(pages): build homepage and category product pages" -m "Developed the main index.html structure and individual product category pages. Updated navigation links and integrated CSS/JS."

