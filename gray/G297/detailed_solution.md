# Detailed solution - G297

The 2-kHz pole is moved down to a new dominant position $p_1'$, so the non-dominant poles are 200 kHz and 4 MHz. With $f=1$, $T=a$, and the $45^\circ$ design rule places the unity-gain crossover at the second pole, 200 kHz. The rule is then checked with the exact loop gain, and the bandwidth read from the crossover.

### Step 1 — Loop gain after moving the pole

$$
T(jf_\mathrm{s})=\frac{40{,}000}{\left(1+j\dfrac{f_\mathrm{s}}{|p_1'|}\right)\left(1+j\dfrac{f_\mathrm{s}}{200\ \mathrm{kHz}}\right)\left(1+j\dfrac{f_\mathrm{s}}{4\ \mathrm{MHz}}\right)} .
$$
The original 2-kHz pole has become $p_1'$; it is no longer present at 2 kHz.

### Step 2 — Dominant pole from the design rule

Between $|p_1'|$ and 200 kHz, $|T|\approx40{,}000\,|p_1'|/f_\mathrm{s}$. Making this reach unity at 200 kHz, where the dominant pole gives $-90^\circ$ and the 200-kHz pole about $-45^\circ$:
$$
|p_1'|=\frac{200\ \mathrm{kHz}}{40{,}000}=5\ \mathrm{Hz}.
$$

### Step 3 — Exact check

With $|p_1'|=5$ Hz, solving $|T|=1$ gives $f_c\approx157$ kHz, where
$$
\angle T(f_c)=-90.0^\circ-\tan^{-1}\frac{157}{200}-\tan^{-1}\frac{157}{4000}=-90.0^\circ-38.2^\circ-2.2^\circ=-130.4^\circ,
$$
so $\mathrm{PM}\approx49.6^\circ$. For exactly $45^\circ$, the 200-kHz and 4-MHz poles must contribute $45^\circ$ at the crossover, which happens at 183 kHz; there their factors are 1.354 and 1.001, and $|T|=1$ requires
$$
|p_1'|=\frac{183\ \mathrm{kHz}\times1.354\times1.001}{40{,}000}=6.2\ \mathrm{Hz}.
$$
So $|p_1'|\approx5$ Hz by the rule, or 6.2 Hz for exactly $45^\circ$.

### Step 4 — Bandwidth with feedback

With unity feedback, $A=T/(1+T)$ stays near 1 until the crossover, so the bandwidth is about the unity-loop-gain frequency: nominally 200 kHz, exactly 157 kHz (5 Hz design) or 183 kHz (6.2 Hz design). The finite margin causes 1.6–2.3 dB of peaking, and the closed-loop $-3$ dB point is at about 260 kHz (5 Hz) or 300 kHz (6.2 Hz). Result: $|p_1'|\approx5$ Hz, bandwidth ≈ 200 kHz.
