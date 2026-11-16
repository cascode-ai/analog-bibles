# Detailed solution - R678

**Approach.** The circuit is a common-source stage, whose gain with $\lambda = 0$ is $-g_mR_D$. The only new ingredient is the transconductance of a fully velocity-saturated transistor, derived from $I_D = (\text{charge per unit length})\times v_{sat}$.

### Step 1 — Drain current under complete velocity saturation

The drain current is the mobile charge per unit length, $Q_d = WC_{ox}(V_{GS} - V_{TH})$ (set by the gate overdrive), times the carrier velocity, which under complete velocity saturation is $v_{sat}$ (about $10^7$ cm/s for electrons in silicon) throughout the channel:

$$I_D = Q_d\,v_{sat} = WC_{ox}\,v_{sat}\,(V_{GS} - V_{TH}).$$

The current is **linear** in the overdrive and independent of $L$: at a fixed velocity a longer channel does not slow the carriers further, so only the induced charge matters.

### Step 2 — Transconductance

With $V_{TH}$ constant ($\gamma = 0$, source grounded):

$$g_m = \frac{\partial I_D}{\partial V_{GS}} = WC_{ox}\,v_{sat},$$

independent of the bias current, the overdrive and $L$. Only $W$ (and $C_{ox}$) can raise it.

### Step 3 — Small-signal gain of the CS stage

With $V_{DD}$ at ac ground, $v_{gs} = v_{in}$, no $r_O$ ($\lambda = 0$) and no body effect, the current $g_mv_{in}$ drawn from the output node flows through $R_D$:

$$
\begin{aligned}
\frac{0 - v_{out}}{R_D} &= g_mv_{in}\\
A_v = \frac{v_{out}}{v_{in}} &= -g_mR_D .
\end{aligned}
$$

### Step 4 — Combine

$$A_v = -WC_{ox}\,v_{sat}\,R_D .$$

**Numerical illustration.** Take $W = 10\ \mu$m, $t_{ox} = 4$ nm and $R_D = 1\ \mathrm{k}\Omega$:

$$
\begin{aligned}
C_{ox} &= \frac{\epsilon_{ox}}{t_{ox}} = \frac{3.9\times8.854\times10^{-12}\ \mathrm{F/m}}{4\times10^{-9}\ \mathrm{m}} = 8.63\times10^{-3}\ \mathrm{F/m^2},\\
g_m &= WC_{ox}v_{sat} = (10^{-5}\ \mathrm{m})(8.63\times10^{-3}\ \mathrm{F/m^2})(10^5\ \mathrm{m/s}) = 8.63\ \mathrm{mS},\\
A_v &= -g_mR_D = -(8.63\ \mathrm{mS})(1\ \mathrm{k}\Omega) = -8.6 .
\end{aligned}
$$

For a long-channel device, $A_v = -\sqrt{2\mu_nC_{ox}(W/L)I_D}\,R_D$ can be raised by increasing the bias current or shortening $L$; under complete velocity saturation neither helps, and the gain depends only on $W$, $C_{ox}$, $v_{sat}$ and $R_D$.

### Result

$$A_v = -g_mR_D = -WC_{ox}\,v_{sat}\,R_D,$$

because complete velocity saturation gives $I_D = WC_{ox}v_{sat}(V_{GS} - V_{TH})$ and hence $g_m = WC_{ox}v_{sat}$, independent of $L$ and of the bias current.

**Common mistake.** Using the square-law transconductance $\sqrt{2\mu_nC_{ox}(W/L)I_D}$ or $2I_D/(V_{GS} - V_{TH})$. Under velocity saturation the current is linear in the overdrive, so $g_m = I_D/(V_{GS} - V_{TH}) = WC_{ox}v_{sat}$.

**Common mistake.** Inserting a factor $\tfrac12$ or a $1/L$ into the velocity-saturated current. It is simply charge per unit length times velocity: $WC_{ox}(V_{GS} - V_{TH})\cdot v_{sat}$.
