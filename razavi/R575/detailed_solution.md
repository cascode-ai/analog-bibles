# Detailed solution - R575

**Approach.** With CK high and $V_{out}$ tracking $V_{in}$, the voltage across the switch is tiny, so $M_1$ operates in deep triode and behaves as a linear resistor $R_{on1}$. Its value is set by the overdrive $V_{DD} - V_{in} - V_{TH}$. The switch and $C_H$ then form a first-order RC low-pass, and the phase shift at 100 MHz follows from $\arctan(\omega R_{on1}C_H)$.

### Step 1 — Operating point of the switch

- The gate is at $V_{DD} = 3$ V.
- The input swings between $V_m - V_0 = 0$ and $V_m + V_0 = 20$ mV, around a mean of $V_m = 10$ mV.
- The output follows the input closely, so both diffusion terminals sit at about $V_{in}$. Whichever one is momentarily lower acts as the source, and in either case $V_{GS} \approx V_{DD} - V_{in}$.
- $V_{DS} = V_{in} - V_{out}$ is very small (we will check below that it is about 0.5 mV), far below the overdrive. So the transistor is in **deep triode**.

The device constant is

$$\beta = \mu_nC_{ox}\frac WL = (134\ \mu\mathrm{A/V^2})\times\frac{20}{0.5} = 5.36\ \mathrm{mA/V^2}.$$

### Step 2 — On-resistance

The **square-law triode current** is $I_D = \beta[(V_{GS} - V_{TH})V_{DS} - V_{DS}^2/2]$. For $V_{DS} \to 0$ the quadratic term is negligible and $I_D \approx \beta(V_{GS} - V_{TH})V_{DS}$: a linear resistor with

$$R_{on1} = \frac{V_{DS}}{I_D} = \frac{1}{\beta(V_{GS} - V_{TH})} = \frac{1}{\beta(V_{DD} - V_{in} - V_{TH})}.$$

At the mean input level $V_{in} = V_m = 10$ mV:

$$
\begin{aligned}
V_{ov} &= V_{DD} - V_{in} - V_{TH} = 3 - 0.01 - 0.7 = 2.29\ \mathrm{V},\\
R_{on1} &= \frac{1}{(5.36\times10^{-3}\ \mathrm{A/V^2})(2.29\ \mathrm{V})} = \frac{1}{12.27\ \mathrm{mS}} = 81.5\ \Omega.
\end{aligned}
$$

Over the input range it varies only slightly:

$$
\begin{aligned}
V_{in} = 0: &\quad R_{on1} = \frac{1}{(5.36\ \mathrm{mA/V^2})(2.30\ \mathrm{V})} = 81.1\ \Omega,\\
V_{in} = 20\ \mathrm{mV}: &\quad R_{on1} = \frac{1}{(5.36\ \mathrm{mA/V^2})(2.28\ \mathrm{V})} = 81.8\ \Omega.
\end{aligned}
$$

That is a variation of ±0.4 %, so for this small input the switch is, to a very good approximation, a fixed 81.5-Ω resistor.

### Step 3 — Transfer function of the RC sampler

**KCL at the output.** The current through the switch charges $C_H$:

$$\frac{V_{in} - V_{out}}{R_{on1}} = C_H\frac{dV_{out}}{dt}.$$

In the Laplace domain, $V_{in} - V_{out} = sR_{on1}C_HV_{out}$, so

$$\frac{V_{out}}{V_{in}}(s) = \frac{1}{1 + sR_{on1}C_H}.$$

This is a first-order low-pass filter. The dc part $V_m$ passes with gain 1, and the sinusoid is slightly attenuated and delayed.

### Step 4 — Phase shift at 100 MHz

At $s = j\omega_{in}$:

$$
\begin{aligned}
\omega_{in}R_{on1}C_H &= (2\pi\times10^{8}\ \mathrm{rad/s})(81.5\ \Omega)(1\times10^{-12}\ \mathrm{F}) = 0.0512,\\
\phi &= -\arctan(\omega_{in}R_{on1}C_H) = -\arctan(0.0512) = -0.0511\ \mathrm{rad} = -2.93^\circ .
\end{aligned}
$$

The output **lags** the input by 2.93°. Expressed as a time delay:

$$\Delta t = \frac{|\phi|}{\omega_{in}} = \frac{0.0511\ \mathrm{rad}}{6.283\times10^{8}\ \mathrm{rad/s}} = 81\ \mathrm{ps} \approx R_{on1}C_H .$$

The amplitude is attenuated very little:

$$\left|\frac{V_{out}}{V_{in}}\right| = \frac{1}{\sqrt{1 + 0.0512^2}} = \frac{1}{\sqrt{1.00262}} = 0.9987,$$

a loss of only 0.13 %.

**Check of the deep-triode assumption.** The voltage across the switch is $V_{in} - V_{out} = V_{in}\cdot j\omega RC/(1 + j\omega RC)$, whose amplitude is $10\ \mathrm{mV}\times0.0511 = 0.51$ mV. This is indeed negligible next to $V_{ov} = 2.29$ V, so the $V_{DS}^2/2$ term is negligible.

**Variation over the cycle.** Because $R_{on1}$ changes by only ±0.4 %, the phase changes only between −2.92° (at $V_{in} = 0$) and −2.94° (at $V_{in} = 20$ mV). The response is practically linear for such a small signal.

### Result

$$R_{on1} = \frac{1}{\mu_nC_{ox}(W/L)(V_{DD} - V_{in} - V_{TH})} = \frac{1}{(5.36\ \mathrm{mA/V^2})(3 - 0.01 - 0.7)\ \mathrm{V}} \approx 81.5\ \Omega$$

(81.1–81.8 Ω over the 0–20 mV input range). With $V_{out}/V_{in} = 1/(1 + j\omega R_{on1}C_H)$ and $\omega R_{on1}C_H = 2\pi(10^8)(81.5)(10^{-12}) = 0.0512$, the phase shift is

$$\phi = -\arctan(0.0512) \approx -2.9^\circ,$$

i.e. the output lags by about 2.9° (a delay of about 81 ps), and the amplitude is attenuated by only 0.13 %.

**Common mistake.** Using a saturation-region expression (for example $1/g_m$ with $g_m = \beta V_{ov}$ treated as a saturated device, or $V_{DS}/I_{D,sat}$) for the on-resistance. With $V_{out}$ tracking $V_{in}$, $V_{DS} \approx 0$, so the device is in deep triode and $R_{on} = 1/[\beta(V_{GS} - V_{TH})]$.

**Common mistake.** Reporting $\omega RC = 0.0512$ (a value in radians) as "0.05°", or giving a phase *lead*. The RC network is a low-pass, so the output lags, and $\arctan(0.0512)$ is 0.0511 rad, which is 2.93°.

**Common mistake.** Using the wrong overdrive, for example $V_{DD} - V_{TH}$ computed with $V_{DD} = 3$ V but forgetting that the source sits at $V_{in}$ (a small error here), or using $V_{DD}$ alone or $V_{DD} - 2V_{TH}$ (large errors). The channel charge is set by $V_{GS} - V_{TH} = V_{DD} - V_{in} - V_{TH}$.
