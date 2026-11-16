# Detailed solution - R681

**Approach.** Differentiate the empirical $E_g(T)$ and evaluate it at 300 K. Then carry a temperature-dependent $E_g$ through $\partial V_{BE}/\partial T$, the quantity a bandgap reference cancels, and see how the extra term changes (a) the required PTAT gain and the output voltage and (b) the curvature of the reference voltage versus temperature.

### Step 1 — Differentiate $E_g(T)$

With the quotient rule,

$$
\begin{aligned}
\frac{d}{dT}\left[\frac{T^2}{T + 1108}\right] &= \frac{2T(T + 1108) - T^2\cdot1}{(T + 1108)^2}\\
&= \frac{2T^2 + 2216T - T^2}{(T + 1108)^2} = \frac{T(T + 2216)}{(T + 1108)^2},
\end{aligned}
$$

so

$$\frac{\partial E_g}{\partial T} = -7.02\times10^{-4}\,\frac{T(T + 2216)}{(T + 1108)^2}\ \ \mathrm{eV/K}.$$

Since $T(T + 2216) = (T + 1108)^2 - 1108^2$, equivalently

$$\frac{\partial E_g}{\partial T} = -7.02\times10^{-4}\left[1 - \left(\frac{1108}{T + 1108}\right)^2\right]\ \mathrm{eV/K}.$$

### Step 2 — Evaluate at 300 K

$$
\begin{aligned}
\frac{T(T + 2216)}{(T + 1108)^2} &= \frac{300\times2516}{1408^2} = \frac{754\,800}{1\,982\,464} = 0.3807,\\
\frac{\partial E_g}{\partial T}\bigg|_{300\ \mathrm{K}} &= -7.02\times10^{-4}\times0.3807\ \mathrm{eV/K} = -2.67\times10^{-4}\ \mathrm{eV/K}.
\end{aligned}
$$

In voltage terms, $E_g/q$ changes by **$-0.27$ mV/K**. The gap itself at 300 K is

$$E_g(300\ \mathrm{K}) = 1.16 - 7.02\times10^{-4}\times\frac{90\,000}{1408} = 1.16 - 0.0449 = 1.115\ \mathrm{eV}.$$

**The slope is not constant:** $-2.35\times10^{-4}$ eV/K at 250 K and $-2.97\times10^{-4}$ eV/K at 350 K, with

$$\frac{\partial^2E_g}{\partial T^2} = -7.02\times10^{-4}\cdot\frac{2\times1108^2}{(T + 1108)^3} = -6.2\times10^{-7}\ \mathrm{eV/K^2}\quad\text{at 300 K}.$$

### Step 3 — Where $E_g$ enters $V_{BE}$

A bandgap reference adds a PTAT voltage to $V_{BE}$, whose TC is negative. With

$$V_{BE} = V_T\ln\frac{I_C}{I_S}, \qquad I_S = b\,T^{4+m}\exp\!\left(-\frac{E_g}{kT}\right),$$

($b$ a constant, $m \approx -3/2$ the mobility temperature exponent) and $V_T\cdot E_g/(kT) = E_g/q$:

$$V_{BE} = \frac{E_g(T)}{q} - V_T\left[(4 + m)\ln T + \ln b - \ln I_C\right].$$

Differentiating at constant $I_C$, the derivative of $E_g(T)/q$ adds a term to the familiar result:

$$\frac{\partial V_{BE}}{\partial T} = \frac{V_{BE} - (4 + m)V_T - E_g/q}{T} + \frac{1}{q}\frac{\partial E_g}{\partial T} .$$

Combining the two $E_g$ terms,

$$\frac{\partial V_{BE}}{\partial T} = \frac{V_{BE} - (4 + m)V_T - E_{g0}/q}{T}, \qquad E_{g0} = E_g - T\,\frac{\partial E_g}{\partial T},$$

so $E_g$ is effectively replaced by its straight-line extrapolation from 300 K to 0 K:

$$E_{g0} = 1.115\ \mathrm{eV} + (300\ \mathrm{K})(2.67\times10^{-4}\ \mathrm{eV/K}) = 1.115 + 0.080 = 1.195\ \mathrm{eV}.$$

### Step 4 — Effect on the TC of $V_{BE}$ and on the reference

Take $V_{BE} = 750$ mV, $m = -3/2$ ($4 + m = 2.5$) and $V_T = 25.85$ mV at 300 K, so $(4 + m)V_T = 64.6$ mV.

**Constant $E_g$ (1.12 eV):**

$$\frac{\partial V_{BE}}{\partial T} = \frac{0.750 - 0.0646 - 1.12}{300}\ \mathrm{V/K} = \frac{-0.4346}{300}\ \mathrm{V/K} = -1.45\ \mathrm{mV/K}.$$

**With $E_g(T)$:**

$$\frac{\partial V_{BE}}{\partial T} = \frac{0.750 - 0.0646 - 1.195}{300}\ \mathrm{V/K} = \frac{-0.510}{300}\ \mathrm{V/K} = -1.70\ \mathrm{mV/K}.$$

$V_{BE}$ falls about 0.25–0.27 mV/K faster than the constant-$E_g$ formula predicts. For the reference $V_{REF} = V_{BE} + K\,V_T\ln n$:

- **Larger PTAT gain.** Zero TC needs a PTAT slope of 1.70 mV/K instead of 1.45 mV/K, about 17 % more (larger $\ln n$ or resistor ratio).
- **Higher output voltage.** A PTAT slope of 1.70 mV/K is worth $300\times1.70\ \mathrm{mV} = 0.510$ V at 300 K, so
$$V_{REF} = 0.750 + 0.510 = 1.26\ \mathrm{V} \;=\; \frac{E_{g0}}{q} + (4 + m)V_T = 1.195 + 0.065\ \mathrm{V}.$$
A design based on a constant $E_g$ of about 1.12 eV predicts $1.12 + 0.065 \approx 1.18$ V; built that way it would be mis-set and keep a residual TC of about $-0.27$ mV/K (exactly $(1/q)\,\partial E_g/\partial T$ if the constant value were $E_g(300\ \mathrm{K})$). This is why real bandgap references sit at about 1.2–1.25 V.

### Step 5 — Effect on the curvature

$E_g(T)$ is curved: over $\pm50$ K around 300 K it deviates from its tangent by about

$$\frac12\,\frac{\partial^2E_g}{\partial T^2}\,(\Delta T)^2 = \frac12(-6.2\times10^{-7})(50)^2\ \mathrm{eV} \approx -0.77\ \mathrm{meV},$$

i.e. about $-0.8$ mV in $V_{BE}$ (a direct evaluation gives $-0.80$ mV at 250 K and $-0.75$ mV at 350 K), comparable to the curvature of the $(4 + m)V_T\ln T$ term, about $-(4 + m)(k/q)(\Delta T)^2/(2T) \approx -0.9$ mV over the same range.

A PTAT term is linear in $T$ and cancels only the linear part, so the reference has zero TC at a single temperature and a parabolic residual ("bow") of roughly a millivolt or more across a 100-K range; precision references add curvature correction.

### Result

$$\frac{\partial E_g}{\partial T} = -7.02\times10^{-4}\,\frac{T(T + 2216)}{(T + 1108)^2}\ \mathrm{eV/K} \;\approx\; -2.7\times10^{-4}\ \mathrm{eV/K}\ \ (-0.27\ \mathrm{mV/K})\ \text{at 300 K},$$

where $E_g(300\ \mathrm{K}) \approx 1.115$ eV.

Effect on bandgap references:

- The TC of $V_{BE}$ gains the extra term $(1/q)\,\partial E_g/\partial T$: about $-1.70$ mV/K instead of $-1.45$ mV/K for $V_{BE} = 750$ mV. Equivalently, the effective gap in the zero-TC condition is the extrapolated $E_{g0} \approx 1.195$ eV. The PTAT gain must be about 17 % larger, and the zero-TC output is $V_{REF} \approx E_{g0}/q + (4 + m)V_T \approx 1.26$ V rather than about 1.18 V.
- Because the slope itself varies with $T$ ($\partial^2E_g/\partial T^2 \approx -6.2\times10^{-7}$ eV/K²), $V_{BE}$ acquires extra curvature (about $-0.8$ mV at $\pm50$ K), which a linear PTAT term cannot cancel: zero TC holds at only one temperature, with a parabolic residual that requires curvature correction.

**Common mistake.** Getting a positive derivative. The formula subtracts a term that grows with $T$, so the bandgap *decreases* with temperature.

**Common mistake.** Concluding that the variation of $E_g$ does not matter because the reference is "set by $E_g$". The reference cancels the TC of $V_{BE}$, which includes $\partial E_g/\partial T$; ignoring it mis-sets the PTAT gain by about 17 % and the output voltage by about 80 mV.
