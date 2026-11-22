# Detailed solution - A293

Use the intuitive method: the input pair delivers a current to the output node, and the gain is that current times the output resistance. Each gain-enhancement amplifier regulates its cascode's source: a change at the source is amplified by $-A$ and applied to the gate, so the cascode device sees $A$ times more gate–source signal and its source impedance looks $A$ times stiffer. This multiplies the ordinary cascode output resistance by about $A$. Each regulated cascode is treated on its own, as the question describes.

### Step 1 — Output current

The input splits as $\pm v_{IN}/2$, so M1 and M2 change their currents by $\pm g_{m1}v_{IN}/2$. The cascodes pass these currents unchanged. The left current flows through M5 into M7, whose gate (tied to the M5 drain) drives M8 as a mirror; M8 delivers it to the output, where it adds to the right half's current. The short-circuit output current is therefore $g_{m1}v_{IN}$, and

$$
A_v=\frac{v_{OUT}}{v_{IN}}=g_{m1}R_{out}.
$$

### Step 2 — Output resistance of a regulated cascode

For an ordinary cascode, $R=g_mr_{ds}\,r_{ds,\mathrm{lower}}$. With the enhancement amplifier, a voltage change $v_s$ at the cascode source produces a gate–source change $-(1+A)v_s\approx-Av_s$ instead of $-v_s$, so

$$
R_{\mathrm{reg}}\approx A\,g_mr_{ds}\,r_{ds,\mathrm{lower}} .
$$

Looking up and down from the output:

$$
R_{out}\approx(A\,g_{m6}r_{ds6}r_{ds8})\parallel(A\,g_{m4}r_{ds4}r_{ds2}) .
$$

### Step 3 — Substituting the given ratios

With $g_{mP}=g_{mN}/2$, $r_{dsP}=r_{dsN}/2$ and $A=0.5g_{mN}r_{dsP}=0.25\,g_{mN}r_{dsN}$:

$$
\begin{aligned}
R_{up}&=A\,g_{mP}r_{dsP}^2=(0.25g_{mN}r_{dsN})\frac{g_{mN}}2\frac{r_{dsN}^2}4=\frac{g_{mN}^2r_{dsN}^3}{32},\\
R_{down}&=A\,g_{mN}r_{dsN}^2=\frac{g_{mN}^2r_{dsN}^3}{4},\qquad
R_{out}=R_{up}\parallel R_{down}=\frac{g_{mN}^2r_{dsN}^3}{36},
\end{aligned}
$$
$$
A_v=g_{mN}R_{out}=\frac{(g_{mN}r_{dsN})^3}{36} .
$$

### Step 4 — Numerical estimate

$g_{mN}r_{dsP}=100$ gives $g_{mN}r_{dsN}=200$ and $A=50$:

$$
R_{out}=\frac{200^2}{36}\,r_{dsN}=1.1\times10^3\,r_{dsN},\qquad A_v=\frac{200^3}{36}=2.2\times10^5\ \mathrm{V/V}.
$$

(Using $1+A$ in place of $A$ gives about $2.27\times10^5$.)

### Step 5 — The connection as drawn

The intuitive result assumes the upper amplifier regulates only M6. As drawn, it also drives the gate of M5, whose drain sets the M7/M8 gates. A change $v_x$ at the M8 drain then moves the M7 drain by about $-Av_x$; because the left-branch current is fixed, the mirror gate shifts and raises the effective output conductance of M8 to $(1+A)/r_{ds8}$, cancelling the p-side enhancement. An exact analysis of that connection gives $R_{out}\approx g_{mP}r_{dsP}^2\parallel(1+A)g_{mN}r_{dsN}^2\approx52\,r_{dsP}$ and $A_v\approx5.2\times10^3$; with M5's gate on a fixed bias it returns to the intuitive $2.2\times10^5$.
