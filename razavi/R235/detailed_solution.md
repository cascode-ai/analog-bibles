# Detailed solution - R235

**Approach.** $M_2$ copies $I_{REF}$ exactly only if its drain–source voltage $V_Y$ equals that of $M_1$, $V_X$. A change of $V_b$ moves $V_Y$ almost one-for-one, because $M_3$ acts as a source follower whose current is essentially fixed. $V_X$ does not move. The resulting $V_{DS}$ difference, through channel-length modulation, gives the mismatch $(1 + \lambda V_{DS2})/(1 + \lambda V_{DS1})$.

### Step 1 — Nominal operating point

All three devices have $W/L = 40/0.5 = 80$ and $\mu_nC_{ox}W/L = (134\ \mu\mathrm{A/V^2})(80) = 10.72\ \mathrm{mA/V^2}$. The diode-connected $M_1$ carries $I_{REF} = 0.3$ mA:

$$V_{ov} = \sqrt{\frac{2(0.3\ \mathrm{mA})}{10.72\ \mathrm{mA/V^2}}} = 0.237\ \mathrm{V}, \qquad V_X = V_{GS1} = 0.7 + 0.237 = 0.937\ \mathrm{V} .$$

At the nominal $V_b = 2V_{GS} = 1.873$ V, $V_Y = V_b - V_{GS3} = 0.937$ V $= V_X$. So $V_{DS2} = V_{DS1}$ and $I_{out} = I_{REF}$ exactly, even with $\lambda \ne 0$.

(Including $\lambda$ in the square law of $M_1$ lowers $V_{GS1}$ slightly, to about 0.926 V. This changes the final percentage only in the third digit, so we keep 0.937 V.)

### Step 2 — How $V_Y$ responds to a change of $V_b$

**Who sets what.**

- $V_X = V_{GS1}$ is set by $I_{REF}$ through $M_1$ alone. It does not depend on $V_b$.
- $M_2$ has a fixed gate voltage $V_X$, so it sinks an (almost) fixed current.
- $M_3$ carries that current. Its gate is at $V_b$ and its source is node Y, so it works as a **source follower**: $V_Y = V_b - V_{GS3}$, and $V_{GS3}$ is fixed by the (almost constant) current.

So $V_Y$ follows $V_b$:

$$\Delta V_Y \approx \Delta V_b = \pm100\ \mathrm{mV} .$$

**How good is "almost"?** Treat it as a small-signal problem with P held fixed. M2 has a fixed gate, so it is just its output resistance $r_{O2}$ from Y to ground. $M_3$ is a current source $g_{m3}v_{gs3}$ with $r_{O3}$ in parallel. KCL at Y (current down through $M_3$ equals current into $r_{O2}$):

$$g_{m3}(\Delta V_b - \Delta V_Y) - \frac{\Delta V_Y}{r_{O3}} = \frac{\Delta V_Y}{r_{O2}} \quad\Longrightarrow\quad \frac{\Delta V_Y}{\Delta V_b} = \frac{g_{m3}}{g_{m3} + 1/r_{O3} + 1/r_{O2}} .$$

With $g_{m3} = \sqrt{2(10.72\ \mathrm{mA/V^2})(0.3\ \mathrm{mA})} = 2.54$ mS and $r_{O2} = r_{O3} = 1/(\lambda I_D) = 1/(0.1\ \mathrm{V^{-1}}\times0.3\ \mathrm{mA}) = 33.3\ \mathrm{k}\Omega$ ($1/r_O = 0.03$ mS):

$$\frac{\Delta V_Y}{\Delta V_b} = \frac{2.54}{2.54 + 0.03 + 0.03} = 0.977 .$$

So $V_Y$ moves by about 98 mV. Taking the full 100 mV is accurate to about 2 %, which is good enough here.

### Step 3 — Mismatch from channel-length modulation

Both $M_1$ and $M_2$ are saturated, with the same $V_{GS}$ and size. Their currents are

$$I_D = \frac12\mu_nC_{ox}\frac{W}{L}(V_{GS} - V_{TH})^2(1 + \lambda V_{DS}),$$

so everything cancels in the ratio except the channel-length-modulation factor:

$$\frac{I_{out}}{I_{REF}} = \frac{1 + \lambda V_{DS2}}{1 + \lambda V_{DS1}} = \frac{1 + \lambda(V_X + \Delta V_Y)}{1 + \lambda V_X} .$$

**$V_b$ raised by 100 mV** ($V_{DS2} = 1.037$ V):

$$\frac{I_{out}}{I_{REF}} = \frac{1 + 0.1(1.037)}{1 + 0.1(0.937)} = \frac{1.1037}{1.0937} = 1.0091 .$$

**$V_b$ lowered by 100 mV** ($V_{DS2} = 0.837$ V):

$$\frac{I_{out}}{I_{REF}} = \frac{1.0837}{1.0937} = 0.9909 .$$

**Relative mismatch:**

$$\frac{I_{out} - I_{REF}}{I_{REF}} = \frac{\lambda\Delta V_Y}{1 + \lambda V_X} = \frac{\pm(0.1)(0.1)}{1.0937} = \pm0.91\ \% .$$

**Absolute mismatch:**

$$\Delta I = \pm0.0091\times0.3\ \mathrm{mA} = \pm2.7\ \mu\mathrm{A} .$$

To first order this is simply $\lambda\Delta V_Y = 1$ %, i.e. about 3 μA. Including the 0.977 follower factor of Step 2 gives 0.89 %, still about 0.9 %.

### Step 4 — Is $M_2$ still saturated?

With $V_b$ lowered, $V_{DS2} = 0.837$ V, still far above $V_{ov} = 0.237$ V ✓. The cascode itself needs $V_P \ge V_b - V_{TH}$, which the analog circuit is assumed to provide.

### Result

A 100-mV error in $V_b$ shifts $V_Y$ by about 100 mV, while $V_X = 0.937$ V stays fixed, so

$$\frac{I_{out}}{I_{REF}} = \frac{1 + \lambda(0.937 \pm 0.1)}{1 + \lambda(0.937)} = 1 \pm \frac{0.01}{1.094},$$

**a mismatch of about ±0.9 % (≈ ±2.7 μA out of 0.3 mA).** $I_{out}$ is larger than $I_{REF}$ if $V_b$ is too high and smaller if $V_b$ is too low.

**Common mistake.** Treating the 100-mV error as a change of the gate–source voltage of $M_2$ (which would change the current by tens of percent). The gate of $M_2$ is tied to $V_X$ and does not move. $V_b$ only shifts the *drain* voltage of $M_2$, which matters only through $\lambda$.

**Common mistake.** Claiming there is no mismatch "because the cascode shields $M_2$." The cascode shields $M_2$ from changes at P, but $V_b$ drives node Y directly through the source follower $M_3$. Any error in $V_b$ appears almost entirely in $V_{DS2}$.

**Common mistake.** Using the PMOS value $\lambda = 0.2\ \mathrm{V^{-1}}$, or assuming $V_Y$ moves only a few millivolts. All devices here are NMOS ($\lambda = 0.1\ \mathrm{V^{-1}}$), and the follower gain from $V_b$ to $V_Y$ is about 0.98.
