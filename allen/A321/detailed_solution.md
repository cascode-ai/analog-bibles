# Detailed solution - A321

The 2.2 GB rule assumes a single nondominant pole well separated from the rest. Here the nondominant poles are close together, so the phase lag of all of them must be summed at the unity-gain frequency. With the dominant pole contributing −90°, a 60° phase margin leaves 30° for the nondominant poles; solve for GB and form $k=|p_6|/GB$.

### Step 1 — Phase-margin condition

$$
PM=90^\circ-2\tan^{-1}\frac{GB}{0.702\ \mathrm{G}}-\tan^{-1}\frac{GB}{1.652\ \mathrm{G}}-\tan^{-1}\frac{GB}{4.176\ \mathrm{G}}-\tan^{-1}\frac{GB}{555\ \mathrm{G}}=60^\circ ,
$$

with all poles in rad/s.

### Step 2 — Solving for GB

Solving numerically gives $GB=143\times10^6$ rad/s (22.8 MHz). Check:

| Pole (rad/s) | $0.702\times10^9$ (×2) | $1.652\times10^9$ | $4.176\times10^9$ | $555\times10^9$ |
|---|---|---|---|---|
| Lag at GB | 2 × 11.53° | 4.96° | 1.96° | 0.01° |

The total is 30.0°, as required.

### Step 3 — The constant $k$

$$
k=\frac{|p_6|}{GB}=\frac{1.652\times10^9}{1.43\times10^8}=11.5 .
$$

The 2.2 rule fails here: $GB=|p_A|/2.2=319$ Mrad/s would leave only about 26° of phase margin, because $p_A$ and $p_B$ coincide and $p_6$, $p_9$ lie close to them. (Evaluating the phase at the true unity-gain frequency, slightly below GB because the nondominant poles also roll off the magnitude, gives $k\approx11.0$.)
