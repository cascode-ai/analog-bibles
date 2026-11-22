# Detailed solution - A068

Write the transconductance of each model as a function of the drain current, set the two equal, and solve for the current. Then check what overdrive this current corresponds to.

### Step 1 — Transconductance in each region

Weak inversion (exponential model): differentiating $i_D=(W/L)I_{D0}\exp[v_{GS}/(nkT/q)]$ gives

$$
g_{m,\text{weak}}=\frac{I_D}{n(kT/q)} .
$$

Strong inversion (saturation square law): from $i_D=\tfrac{K'W}{2L}(v_{GS}-V_T)^2$, $g_m=K'(W/L)(V_{GS}-V_T)$; eliminating $V_{GS}-V_T=\sqrt{2I_D/(K'W/L)}$ gives

$$
g_{m,\text{strong}}=\sqrt{2K'\frac WL I_D} .
$$

### Step 2 — Equate and solve for the current

$$
\frac{I_D}{n(kT/q)}=\sqrt{2K'\frac WL I_D}
\quad\Rightarrow\quad
\frac{I_D^2}{(nkT/q)^2}=2K'\frac WL I_D
\quad\Rightarrow\quad
I_D=2K'\frac WL\left(n\frac{kT}{q}\right)^2 .
$$

The current scales with $W/L$ and $K'$ and with the square of $nkT/q$.

### Step 3 — Interpretation and example

At this current the square law would require an overdrive

$$
V_{GS}-V_T=\sqrt{\frac{2I_D}{K'W/L}}=2n\frac{kT}{q},
$$

about 78 mV for $n=1.5$ at 300 K. Since $g_{m,\text{weak}}\propto I_D$ and $g_{m,\text{strong}}\propto\sqrt{I_D}$, below the transition current the square law would predict a transconductance larger than the weak-inversion value, which is the physical upper limit, so the exponential model applies there; above it the square-law value is the smaller one and applies.

For example, with $K'=110\ \mu\mathrm{A/V^2}$, $W/L=1$, $n=1.5$ and $T=300$ K ($nkT/q=38.8$ mV):

$$
I_D=2(110\ \mu\mathrm{A/V^2})(1)(38.8\ \mathrm{mV})^2=0.33\ \mu\mathrm A .
$$
