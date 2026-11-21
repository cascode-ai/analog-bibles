# Detailed solution - G120

Graphically, the minimum load is the one whose load line through the quiescent point just touches the 0.2 W hyperbola; a smaller $R_L$ gives a steeper line that crosses it. Since a load line touches a hyperbola at its midpoint, the condition is simply that the dissipation at the midpoint equals 0.2 W. Solve this for $R_L$ and check the midpoint is reachable.

### Step 1 — Load line of $Q_1$

With $R_1=R_2=0$, $I_Q=(V_{CC}-V_{BE(\text{on})})/R_3=14.3\ \mathrm V/5\ \mathrm{k\Omega}=2.86$ mA flows in $Q_2$. With $V_{ce1}=V_{CC}-V_o$ and $I_{c1}=I_Q+V_o/R_L$ (KCL at the output),

$$
V_{ce1}=V_{CC}-(I_{c1}-I_Q)R_L,
$$

a straight line through the quiescent point $(15\ \mathrm V,\ 2.86\ \mathrm{mA})$ with intercepts

$$
V_0=V_{CC}+I_QR_L,\qquad I_0=I_Q+\frac{V_{CC}}{R_L}.
$$

### Step 2 — Tangency condition

The product $I_{c1}V_{ce1}$ along a load line peaks at the line's midpoint, where it equals $V_0I_0/4$. The limiting load makes this peak equal to the allowed dissipation:

$$
P_{\max}=\frac{V_0I_0}{4}=\frac{(V_{CC}+I_QR_L)^2}{4R_L}=0.2\ \mathrm W.
$$

Multiplying out gives a quadratic in $R_L$:

$$
I_Q^2R_L^2+\left(2V_{CC}I_Q-4P_{\max}\right)R_L+V_{CC}^2=0,
$$
$$
(8.18\times10^{-6}\ \mathrm{A^2})R_L^2-(0.7142\ \mathrm W)R_L+225\ \mathrm{V^2}=0,
$$

with roots $R_L=316\ \Omega$ and $R_L\approx87\ \mathrm{k\Omega}$.

### Step 3 — Choose the root and check reachability

For the large root the midpoint would be at $V_o=V_{CC}-V_0/2\approx-117$ V, far beyond the $-14.8$ V limit set by $Q_2$ saturation; the reachable part of such a line never comes near 0.2 W (with $R_L\to\infty$ the maximum is about 85 mW). This root is therefore irrelevant.

For $R_L=316\ \Omega$:

$$
V_0=15\ \mathrm V+(2.86\ \mathrm{mA})(316\ \Omega)=15.90\ \mathrm V,\qquad I_0=2.86\ \mathrm{mA}+\frac{15\ \mathrm V}{316\ \Omega}=50.3\ \mathrm{mA}.
$$

The midpoint is $V_{ce1}=7.95$ V, $I_{c1}=25.2$ mA ($V_o=+7.05$ V). This current is within the drive limit $\beta_F(0.3\ \mathrm{mA})=30$ mA and $V_o$ is below the 14.8 V saturation limit, so the point can actually be reached and the dissipation does touch 0.2 W.

The minimum allowable load is **$R_L\approx316\ \Omega$**. Any smaller $R_L$ gives a steeper line whose reachable midpoint lies above the 0.2 W hyperbola. Neglecting $I_Q$ (taking $P_{\max}=V_{CC}^2/4R_L$) would give the cruder value 281 Ω.
