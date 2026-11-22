# Detailed solution - A248

The asymptotic plot puts the 0-dB crossing exactly at GB, where the real magnitude is already 3 dB below the asymptote. Find the true crossover frequency from the exact magnitude, then evaluate the exact phase there.

### Step 1 — Loop gain near crossover

With $F=1$, two poles and no zeros, and the dominant pole far below GB, the loop gain for $\omega\gg|p_1|$ is

$$
L(j\omega)\approx\frac{GB}{j\omega\,(1+j\omega/|p_2|)},\qquad |p_2|=GB .
$$

The factor $GB/(j\omega)$ is the $-20$ dB/decade asymptote through 0 dB at GB, and the second factor is the real second pole.

### Step 2 — True unity-gain frequency

At $\omega=GB$ the exact magnitude is $1/\sqrt{1+1}=1/\sqrt2$ ($-3$ dB), so the real crossing lies lower. With $x=\omega/GB$, set $|L|=1$:

$$
\frac{1}{x\sqrt{1+x^2}}=1\quad\Rightarrow\quad x^4+x^2-1=0\quad\Rightarrow\quad x^2=\frac{\sqrt5-1}{2}=0.618,\qquad x=0.786 .
$$

The loop gain actually crosses 0 dB at $\omega_0\approx0.786\,GB$.

### Step 3 — Phase margin

The dominant pole contributes essentially $-90°$ at $\omega_0$ (since $\omega_0\gg|p_1|$), and the second pole contributes $-\arctan(\omega_0/|p_2|)=-\arctan(0.786)=-38.2°$:

$$
\Phi_M=180°-90°-\arctan(0.786)=90°-38.2°\approx52°\ (51.8°).
$$

The real phase margin is about 52°, larger than the 45° read from the asymptotes, because the actual crossover occurs before the second pole has added its full 45° of lag.
