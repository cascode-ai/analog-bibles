# Detailed solution - A039

A fractional temperature coefficient is the derivative of the logarithm, $\frac{1}{X}\frac{dX}{dT}=\frac{d\ln X}{dT}$. Take the logarithm of $I_s(T)$ and differentiate; then write $v_D$ in terms of $I_s$ at fixed current and differentiate, remembering that $V_t=kT/q$ itself depends on temperature.

### Step 1 — Temperature coefficient of $I_s$

$$
\ln I_s=\ln K+3\ln T-\frac{qV_{G0}}{kT}
\quad\Rightarrow\quad
\frac{1}{I_s}\frac{dI_s}{dT}=\frac{3}{T}+\frac{qV_{G0}}{kT^2}=\frac{3}{T}+\frac{V_{G0}}{TV_t}.
$$

At $T=300$ K:

$$
\frac{1}{I_s}\frac{dI_s}{dT}=\frac{3}{300\ \mathrm K}+\frac{1.205\ \mathrm V}{(300\ \mathrm K)(0.0259\ \mathrm V)}=0.0100+0.1551=0.165\ \mathrm{K^{-1}} .
$$

The saturation current rises by about 16.5 % per kelvin, roughly doubling every 4–5 K; the exponential bandgap term dominates the $T^3$ term.

### Step 2 — Temperature derivative of $v_D$ at constant current

From $i_D=I_s\exp(v_D/V_t)$, $v_D=V_t\ln(I_D/I_s)$. With $I_D$ fixed, both $V_t$ (proportional to $T$) and $I_s$ vary:

$$
\frac{dv_D}{dT}=\frac{V_t}{T}\ln\frac{I_D}{I_s}-V_t\,\frac{1}{I_s}\frac{dI_s}{dT}
=\frac{v_D}{T}-V_t\left(\frac{3}{T}+\frac{V_{G0}}{TV_t}\right)
=-\frac{V_{G0}-v_D+3V_t}{T}.
$$

Numerically,

$$
\frac{dv_D}{dT}=-\frac{1.205\ \mathrm V-0.7\ \mathrm V+3(0.0259\ \mathrm V)}{300\ \mathrm K}=-\frac{0.5827\ \mathrm V}{300\ \mathrm K}=-1.94\ \mathrm{mV/K}.
$$

### Step 3 — Fractional temperature coefficient of $v_D$

$$
\frac{1}{v_D}\frac{dv_D}{dT}=\frac{-1.94\times10^{-3}\ \mathrm{V/K}}{0.7\ \mathrm V}=-2.77\times10^{-3}\ \mathrm{K^{-1}}\approx-2775\ \mathrm{ppm/^\circ C}.
$$

So at constant current the forward voltage falls by about 2 mV/°C. The large positive coefficient of $I_s$ is the cause: to keep $i_D$ constant as $I_s$ grows, $v_D$ must drop. This negative, nearly linear coefficient is what bandgap references exploit.
