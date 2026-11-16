# Detailed solution - R620

**Approach.** $M_1$ and $M_2$ are mirror outputs that share one gate–source voltage, so a threshold mismatch converts directly into a current mismatch, $\Delta I_D/I_D = 2\Delta V_{TH}/(V_{GS} - V_{TH})$. The 2 % specification fixes the allowed $\Delta V_{TH}$ and hence the gate area $WL$; the current and the overdrive voltage fix the aspect ratio $W/L$. Two equations in the two unknowns $W$ and $L$ then give the dimensions.

### Step 1 — The circuit

Reading the figure: $M_0$ is diode-connected (gate tied to drain) and carries the reference current $I_D$ from $V_{DD}$. Its gate–source voltage is applied to the gates of $M_1$ and $M_2$, whose sources are also grounded. So $M_1$ and $M_2$ form a current mirror with two outputs, and **both have exactly the same $V_{GS}$**. Their drain currents $I_{D1}$ and $I_{D2}$ should be about 0.5 mA each.

Both output devices are in saturation, and channel-length modulation is neglected, so the drain voltages do not matter. The only imperfection is the threshold mismatch $\Delta V_{TH} = V_{TH1} - V_{TH2}$.

### Step 2 — Current mismatch caused by a threshold mismatch

The **square-law saturation current** of each device is

$$I_D = \frac12\mu_nC_{ox}\frac{W}{L}(V_{GS} - V_{TH})^2 .$$

$V_{GS}$ is common, so a change in $V_{TH}$ changes $I_D$ at the rate

$$\frac{\partial I_D}{\partial V_{TH}} = -\mu_nC_{ox}\frac{W}{L}(V_{GS} - V_{TH}) = -g_m ,$$

where $g_m$ is the transconductance. For a small mismatch, the difference between the two currents is therefore

$$\Delta I_D = I_{D1} - I_{D2} \approx -g_m\,\Delta V_{TH} .$$

Divide by $I_D$ and use the ratio

$$\frac{g_m}{I_D} = \frac{\mu_nC_{ox}(W/L)(V_{GS} - V_{TH})}{\tfrac12\mu_nC_{ox}(W/L)(V_{GS} - V_{TH})^2} = \frac{2}{V_{GS} - V_{TH}}$$

to get the magnitude

$$\frac{\Delta I_D}{I_D} = \frac{2\,\Delta V_{TH}}{V_{GS} - V_{TH}} .$$

**Intuition.** The current depends on the *square* of the overdrive, so a fractional change $\Delta V_{TH}/(V_{GS} - V_{TH})$ in the overdrive produces twice that fractional change in the current. A larger overdrive makes the mirror less sensitive to threshold mismatch.

### Step 3 — Allowed threshold mismatch

Set $\Delta I_D/I_D = 2\% = 0.02$ and $V_{GS} - V_{TH} = 0.5$ V:

$$\Delta V_{TH} = \frac{(\Delta I_D/I_D)(V_{GS} - V_{TH})}{2} = \frac{0.02\times0.5\ \mathrm{V}}{2} = 5\ \mathrm{mV}.$$

**Check with the exact square law.** With overdrives of $0.5\ \mathrm{V} \pm 2.5$ mV:

$$\frac{I_{D1}}{I_{D2}} = \left(\frac{0.5025}{0.4975}\right)^2 = (1.01005)^2 = 1.0202,$$

i.e. a 2.02 % mismatch, so the linear approximation is accurate.

### Step 4 — Gate area from the mismatch formula

The threshold mismatch is $\Delta V_{TH} = 0.1\,t_{ox}/\sqrt{WL}$ (mV, with $t_{ox}$ in Å and $W$, $L$ in µm). With $t_{ox} = 90$ Å this is $9\ \mathrm{mV\cdot\mu m}/\sqrt{WL}$. Set it equal to 5 mV:

$$
\begin{aligned}
\frac{9\ \mathrm{mV\cdot\mu m}}{\sqrt{WL}} &= 5\ \mathrm{mV},\\
\sqrt{WL} &= \frac{9}{5}\ \mu\mathrm{m} = 1.8\ \mu\mathrm{m},\\
WL &= (1.8\ \mu\mathrm{m})^2 = 3.24\ \mu\mathrm{m}^2 .
\end{aligned}
$$

### Step 5 — Aspect ratio from the current and overdrive

Solve the square law for $W/L$ with $I_D = 0.5$ mA and $V_{GS} - V_{TH} = 0.5$ V:

$$\frac{W}{L} = \frac{2I_D}{\mu_nC_{ox}(V_{GS} - V_{TH})^2} = \frac{2(0.5\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(0.5\ \mathrm{V})^2} = \frac{1\ \mathrm{mA}}{33.5\ \mu\mathrm{A}} = 29.85 .$$

### Step 6 — Solve for $W$ and $L$

We now have two conditions:

$$WL = 3.24\ \mu\mathrm{m}^2, \qquad \frac{W}{L} = 29.85 .$$

Multiplying them gives $W^2$, and dividing them gives $L^2$:

$$
\begin{aligned}
W^2 &= (WL)\left(\frac{W}{L}\right) = 3.24\times29.85\ \mu\mathrm{m}^2 = 96.7\ \mu\mathrm{m}^2 &&\Longrightarrow\quad W = 9.83\ \mu\mathrm{m},\\
L^2 &= \frac{WL}{W/L} = \frac{3.24}{29.85}\ \mu\mathrm{m}^2 = 0.1085\ \mu\mathrm{m}^2 &&\Longrightarrow\quad L = 0.329\ \mu\mathrm{m}.
\end{aligned}
$$

**Check.**

$$
\begin{aligned}
W/L &= 9.83/0.329 = 29.9,\\
WL &= 9.83\times0.329 = 3.24\ \mu\mathrm{m}^2,\\
\Delta V_{TH} &= 9/\sqrt{3.24} = 5\ \mathrm{mV},\\
\Delta I_D/I_D &= 2(5\ \mathrm{mV})/(0.5\ \mathrm{V}) = 2\%.\ \checkmark
\end{aligned}
$$

These are *effective* (electrical) dimensions. Both $M_1$ and $M_2$ get the same size. For the reference current to equal 0.5 mA, the diode device $M_0$ would also have $W/L \approx 29.9$, but the problem asks only about $M_1$ and $M_2$.

### Step 7 — If 2 % is an upper bound

If the specification means "at most 2 %", the area may be larger. $W/L$ must stay at 29.85 to keep 0.5 mA at a 0.5-V overdrive. For example, with $L = 0.5\ \mu$m:

$$
\begin{aligned}
W &= 29.85\times0.5\ \mu\mathrm{m} = 14.9\ \mu\mathrm{m},\\
WL &= 7.46\ \mu\mathrm{m}^2,\\
\Delta V_{TH} &= 9/\sqrt{7.46} = 3.3\ \mathrm{mV},\\
\Delta I_D/I_D &= 2(3.3\ \mathrm{mV})/(0.5\ \mathrm{V}) = 1.3\%.
\end{aligned}
$$

The cost is more area and capacitance. The design of Step 6 is the smallest one that meets the specification.

### Result

$$\frac{W}{L} = \frac{2I_D}{\mu_nC_{ox}(V_{GS} - V_{TH})^2} \approx 29.9, \qquad WL = \left(\frac{9\ \mathrm{mV\cdot\mu m}}{5\ \mathrm{mV}}\right)^2 = 3.24\ \mu\mathrm{m}^2,$$

which gives

$$W \approx 9.8\ \mu\mathrm{m}, \qquad L \approx 0.33\ \mu\mathrm{m}\ \text{(effective)}$$

for both $M_1$ and $M_2$. The allowed threshold mismatch is $\Delta V_{TH} = 5$ mV, from $\Delta I_D/I_D = 2\Delta V_{TH}/(V_{GS} - V_{TH})$. A larger area with the same $W/L$ (e.g. $L = 0.5\ \mu$m, $W = 14.9\ \mu$m, giving 1.3 %) also satisfies a ≤ 2 % bound.

**Common mistake.** Writing $\Delta I_D/I_D = \Delta V_{TH}/(V_{GS} - V_{TH})$, without the factor 2. That allows $\Delta V_{TH} = 10$ mV and an area of only $0.81\ \mu\mathrm{m}^2$, and the resulting mirror would have a 4 % mismatch. The factor 2 comes from the square law: the current varies as the square of the overdrive.

**Common mistake.** Dropping the $\tfrac12$ of the square law when computing the aspect ratio, which gives $W/L = 0.5\ \mathrm{mA}/(134\ \mu\mathrm{A/V^2}\times0.25\ \mathrm{V^2}) = 14.9$ and a current of only 0.25 mA at the specified overdrive.

**Common mistake.** Treating $\Delta V_{TH} = 9/\sqrt{WL}$ as a condition on $W$ alone, or misreading its units (for example $t_{ox}$ in nm), which yields channel lengths of a few hundredths of a micrometre. Two conditions (area and aspect ratio) are needed to fix both $W$ and $L$.
