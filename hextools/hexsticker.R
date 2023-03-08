library(hexSticker)
library(magick)
library(showtext)

# Loading Google fonts (http://www.google.com/fonts)
google_font_name <- "Rubik"
font_add_google(google_font_name)

# Automatically use showtext to render text for future devices
showtext_auto()

apples <- image_read("hextools/touch.png")

sticker(
  apples,
  package = "Collectify",
  p_color = "#545452",
  p_family = google_font_name,
  p_size = 40,
  p_x = 1,
  p_y = 1.5,
  s_x = 1,
  s_y = 0.85,
  s_width = 1.3,
  s_height = 1,
  h_color = "grey",
  filename = "hextools/collectify.png",
  h_fill = "white",
  url = "https://github.com/IndrajeetPatil/collectify/",
  u_size = 7,
  u_color = "grey",
  dpi = 600
)
