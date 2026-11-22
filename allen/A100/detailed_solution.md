# Detailed solution - A100

The PMOS mirror makes the two branch currents equal, so a single unknown current $I$ flows in M1, $R$ and M2. A KVL loop through the gates of M1 and M2 relates the two gate–source voltages through $IR$; writing both with the square law turns that loop into an equation for $I$ alone. M5 then copies the current of M2.

### Step 1 — Currents in the two branches

M3 is diode-connected and M3, M4 are identical with equal $V_{SG}$, so with channel-length modulation ignored $I_{D4}=I_{D3}$. Call this current $I$.

- Right branch: M2's drain feeds M3, so $I_{D2}=I_{D3}=I$.
- Left branch: M4's current enters the top of $R$. The gate of M1 at the top and the gates of M2 and M5 at the bottom draw no current, so all of it flows through $R$ into the drain of M1: $I_R=I_{D1}=I$.

Both NMOS devices M1 and M2 therefore carry the same current $I$, while their sizes differ.

### Step 2 — Loop equation through the resistor

The source of M1 is grounded, its gate is at the top of $R$, and its drain is at the bottom of $R$, which is also the gate of M2 (source grounded). Going from ground up through M2's gate–source voltage and then across $R$ gives M1's gate voltage:

$$
V_{GS1}=V_{GS2}+IR .
$$

The current flows downward through $R$, so the top of $R$ (M1's gate) is the higher node; $V_{GS1}>V_{GS2}$ at equal current means M1 must be the narrower device.

### Step 3 — Solve with the square law

In saturation, with $K'=\mu_nC_{ox}$ and no body effect (both sources grounded, equal $V_T$),

$$
I=\frac{K'}{2}\left(\frac WL\right)(V_{GS}-V_T)^2
\quad\Rightarrow\quad
V_{GS}=V_T+\sqrt{\frac{2I}{K'(W/L)}} .
$$

Substituting both devices into the loop equation, $V_T$ cancels:

$$
IR=\sqrt{\frac{2I}{K'}}\left(\frac1{\sqrt{(W/L)_1}}-\frac1{\sqrt{(W/L)_2}}\right).
$$

Dividing by $\sqrt I$ (the nonzero-current solution) and squaring,

$$
\sqrt I=\frac1R\sqrt{\frac2{K'}}\left(\frac1{\sqrt{(W/L)_1}}-\frac1{\sqrt{(W/L)_2}}\right),
\qquad
I=\frac{2}{K'R^2}\left(\frac1{\sqrt{(W/L)_1}}-\frac1{\sqrt{(W/L)_2}}\right)^2 .
$$

A positive $\sqrt I$ requires $(W/L)_1<(W/L)_2$. The other root of the loop equation is $I=0$: the circuit is self-biased and also has a zero-current state, so a start-up circuit is needed in practice.

The assumption that M1 is saturated needs $V_{DS1}=V_{GS2}\ge V_{GS1}-V_T=V_{GS2}+IR-V_T$, i.e. $IR\le V_T$.

### Step 4 — Output current

M5 has its gate on the same node as M2 and its source grounded, so $V_{GS5}=V_{GS2}$. With both saturated, the square law gives a current ratio equal to the size ratio:

$$
I_{out}=\frac{(W/L)_5}{(W/L)_2}\,I
=\frac{(W/L)_5}{(W/L)_2}\cdot\frac{2}{K'R^2}\left(\frac1{\sqrt{(W/L)_1}}-\frac1{\sqrt{(W/L)_2}}\right)^2 ,
$$

which reduces to $I_{out}=I$ when M5 is the same size as M2. To first order the result depends only on $K'$, $R$ and the aspect ratios, not on $V_{DD}$ or $V_T$.
