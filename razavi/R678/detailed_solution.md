# Detailed solution - R678

**Approach.** The circuit is a common-source (CS) stage: $M_1$ with its source grounded, input at the gate, and a resistor $R_D$ from the drain to $V_{DD}$. With $\lambda = 0$ its gain is $-g_mR_D$. The only new ingredient is the transconductance of a fully velocity-saturated transistor, which we derive from the current $I_D = (\text{charge per unit length})\times v_{sat}$.

### Step 1 — Drain current under complete velocity saturation

The drain current equals the mobile charge per unit length of the channel times the carrier velocity:

$$I_D = Q_d\,v .$$

- The charge per unit length near the source is set by the gate overdrive, as in any MOSFET: $Q_d = WC_{ox}(V_{GS} - V_{TH})$, where $C_{ox}$ is the oxide capacitance per unit area and $V_{GS} - V_{TH}$ the overdrive voltage.
- "Complete velocity saturation" means the lateral field is so high that the carriers move at the saturation velocity $v_{sat}$ (about $10^7$ cm/s for electrons in silicon) throughout the channel, instead of at $\mu E$.

Therefore

$$I_D = WC_{ox}\,v_{sat}\,(V_{GS} - V_{TH}).$$

The current is **linear** in the overdrive (not quadratic as in the square law) and does not depend on $L$: once the carriers move at a fixed velocity, a longer channel does not slow them further, and the current is set only by how much charge the gate induces.

### Step 2 — Transconductance

Differentiate with respect to $V_{GS}$ (with $V_{TH}$ constant, since $\gamma = 0$ and the source is grounded):

$$g_m = \frac{\partial I_D}{\partial V_{GS}} = WC_{ox}\,v_{sat}.$$

$g_m$ is independent of the bias current, the overdrive and $L$. Only the width $W$ (and the oxide, through $C_{ox}$) can raise it.

### Step 3 — Small-signal gain of the CS stage

**Small-signal model.** Ground $V_{DD}$ (it is constant), so $R_D$ connects the output node to AC ground. $M_1$ is replaced by a controlled current source $g_mv_{gs}$ flowing from drain to source; $v_{gs} = v_{in}$ because the source is grounded. Because $\lambda = 0$ there is no $r_O$, and because $\gamma = 0$ (and the source is at ground anyway) there is no body-effect source.

**KCL at the output node.** The current $g_mv_{in}$ is drawn out of the output node by the transistor; it must be supplied through $R_D$ from AC ground, which requires the output to fall below ground by $g_mv_{in}R_D$:

$$
\begin{aligned}
\frac{0 - v_{out}}{R_D} &= g_mv_{in}\\
v_{out} &= -g_mR_D\,v_{in}\\
A_v = \frac{v_{out}}{v_{in}} &= -g_mR_D .
\end{aligned}
$$

### Step 4 — Combine

Substitute $g_m = WC_{ox}v_{sat}$:

$$A_v = -WC_{ox}\,v_{sat}\,R_D .$$

The minus sign shows the stage is inverting: raising $V_{in}$ increases $I_D$, which increases the drop across $R_D$ and lowers $V_{out}$.

**Numerical illustration.** Take $W = 10\ \mu$m, $t_{ox} = 4$ nm and $R_D = 1\ \mathrm{k}\Omega$:

$$
\begin{aligned}
C_{ox} &= \frac{\epsilon_{ox}}{t_{ox}} = \frac{3.9\times8.854\times10^{-12}\ \mathrm{F/m}}{4\times10^{-9}\ \mathrm{m}} = 8.63\times10^{-3}\ \mathrm{F/m^2},\\
g_m &= WC_{ox}v_{sat} = (10^{-5}\ \mathrm{m})(8.63\times10^{-3}\ \mathrm{F/m^2})(10^5\ \mathrm{m/s}) = 8.63\ \mathrm{mS},\\
A_v &= -g_mR_D = -(8.63\ \mathrm{mS})(1\ \mathrm{k}\Omega) = -8.6 .
\end{aligned}
$$

**Comparison with the square law.** For a long-channel device, $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$, so $A_v = -\sqrt{2\mu_nC_{ox}(W/L)I_D}\,R_D$ can be raised by increasing the bias current or shortening $L$. Under complete velocity saturation neither helps: the gain depends only on $W$, $C_{ox}$, $v_{sat}$ and $R_D$.

### Result

$$A_v = -g_mR_D = -WC_{ox}\,v_{sat}\,R_D,$$

because complete velocity saturation gives $I_D = WC_{ox}v_{sat}(V_{GS} - V_{TH})$ and hence $g_m = WC_{ox}v_{sat}$, independent of $L$ and of the bias current.

**Common mistake.** Using the square-law transconductance $\sqrt{2\mu_nC_{ox}(W/L)I_D}$ or $2I_D/(V_{GS} - V_{TH})$. Under velocity saturation the current is linear in the overdrive, so $g_m = I_D/(V_{GS} - V_{TH}) = WC_{ox}v_{sat}$, and it no longer depends on $L$ or $I_D$.

**Common mistake.** Inserting a factor $\tfrac12$ (as in $\tfrac12\mu C_{ox}$) or a $1/L$ into the velocity-saturated current. The current is simply charge per unit length times velocity: $WC_{ox}(V_{GS} - V_{TH})\cdot v_{sat}$.

**Common mistake.** Dropping the minus sign. The CS stage is inverting; the gain is $-g_mR_D$.
