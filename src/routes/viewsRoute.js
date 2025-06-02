import { Router } from "express";
const router = Router();

router.get('/about', (req, res) => { res.render('about'); });
router.get('/contact', (req, res) => { res.render('contact'); });
router.get('/news', (req, res) => { res.render('news'); });
router.get('/', (req, res) => { res.render('home', {}) });
router.get('/:type', (req, res) => {
  const typeDevice = req.params.type;
  const allowedTypes = ['tablet', 'phone', 'laptop'];
  if (allowedTypes.includes(typeDevice)) {
    res.render('home', {});
  }
});

// ------------- Authentication views routes ----------------->
router.get("/login", (req, res) => { res.render("login", { layout: 'false' }) });
router.get("/register", (req, res) => { res.render("register", { layout: 'false' }) });
router.get("/profile", (req, res) => { res.render("profile", { layout: 'false' }) });

export default router;