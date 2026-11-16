当衬底电压 $V_B$ 变负时，$V_{SB} = -V_B$ 增大，$V_{TH} = V_{TH0} + \gamma(\sqrt{2|\phi_F| + V_{SB}} - \sqrt{2|\phi_F|})$ 升高，因此过驱动电压（overdrive voltage）$V_{GS} - V_{TH}$ 减小：
- $g_m = \beta(V_{GS} - V_{TH})$ 减小——在 $V_B = 0$ 附近减小得最快（因为 $dV_{TH}/dV_{SB} = \gamma/(2\sqrt{2|\phi_F| + V_{SB}})$ 在那里最大），之后减小得较慢——当 $V_{TH}$ 达到 $V_{GS}$ 时降为零。
- $r_O = 1/(\lambda I_D) = 2/(\lambda\beta V_{ov}^2)$ 增大，并在同一点趋于无穷大。
- $g_mr_O = 2/(\lambda V_{ov})$ 增大，在该点同样无界增大（按平方律）。
- 器件在一个有限的衬底电压处截止：$V_{SB,off} = [(V_{GS} - V_{TH0})/\gamma + \sqrt{2|\phi_F|}]^2 - 2|\phi_F|$；例如 $V_{GS} = 1.2$ V 时，$V_B \approx -3.34$ V。超过该点后，平方律给出 $g_m = 0$、$I_D = 0$；实际上仍有亚阈值（subthreshold）电流流过，$g_m$ 按指数规律下降，而 $g_mr_O$ 在 $1/(\lambda\zeta V_T)$ 附近趋于平缓。
