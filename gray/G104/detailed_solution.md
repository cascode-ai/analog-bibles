# Detailed solution - G104

The PMOS mirror $M_3$–$M_4$ forces equal currents in the two branches. The NMOS pair then has to carry the same current at two different gate–source voltages, and the difference appears across $R$. Writing that KVL with the square law gives an equation in $I_{BIAS}$ whose nonzero solution depends only on $R$, $\mu_nC_{ox}$ and the two aspect ratios. Its temperature behavior then follows from those parameters.

### Step 1 — Equal branch currents

$M_3$ and $M_4$ are identical and share $V_{GS}$ (with $M_4$ diode-connected), so with channel-length modulation ignored they carry equal currents:

$$
I_{D1}=I_{D2}=I_{BIAS}.
$$

### Step 2 — KVL around the NMOS gate loop

$M_1$ is diode-connected, and its gate drives the gate of $M_2$, whose source is raised by $I_{BIAS}R$. Hence

$$
V_{GS1}=V_{GS2}+I_{BIAS}R .
$$

With equal thresholds, $V_t$ cancels, leaving $V_{ov1}-V_{ov2}=I_{BIAS}R$. Both devices are saturated ($M_1$ is diode-connected, and $M_2$'s drain sits at the diode node of $M_4$, well above its gate minus $V_t$). Using the square law $V_{ov}=\sqrt{2I/(\mu_nC_{ox}W/L)}$:

$$
\sqrt{\frac{2I_{BIAS}}{\mu_nC_{ox}(W/L)_1}}-\sqrt{\frac{2I_{BIAS}}{\mu_nC_{ox}(W/L)_2}}=I_{BIAS}R .
$$

### Step 3 — Solve for $I_{BIAS}$

Dividing by $\sqrt{I_{BIAS}}$ (for the nonzero solution) and squaring,

$$
I_{BIAS}=\frac2{\mu_nC_{ox}R^2}\left(\frac1{\sqrt{(W/L)_1}}-\frac1{\sqrt{(W/L)_2}}\right)^2=\frac2{\mu_nC_{ox}(W/L)_1R^2}\left(1-\sqrt{\frac{(W/L)_1}{(W/L)_2}}\right)^2 .
$$

The left side of the KVL equation must be positive, which is why $(W/L)_2>(W/L)_1$ is required. The current is independent of $V_{DD}$ and $V_t$. $I_{BIAS}=0$ also satisfies the equations, so a start-up circuit is needed to keep the circuit out of that state.

### Step 4 — Temperature behavior

$C_{ox}$ and the aspect ratios do not change with temperature, so only $\mu_n$ and $R$ matter, $I_{BIAS}\propto1/(\mu_nR^2)$:

$$
TC_F=\frac1{I_{BIAS}}\frac{dI_{BIAS}}{dT}=-\frac1{\mu_n}\frac{d\mu_n}{dT}-\frac2R\frac{dR}{dT}.
$$

The mobility falls with temperature, about as $T^{-1.5}$, so for a temperature-independent resistor

$$
TC_F=\frac{1.5}T=\frac{1.5}{298\ \mathrm K}\approx+5000\ \mathrm{ppm/°C}.
$$

The bias current therefore rises with temperature. A resistor with a positive temperature coefficient partly compensates, through the $-2\,TC_R$ term.
