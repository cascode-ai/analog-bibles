# Detailed solution - A486

Follow the word through the pipeline: each stage multiplies the incoming value by the attenuation factor $k$ and adds $b_iV_{REF}$. Unrolling the recursion gives a weighted sum of the bits; evaluate it for $k=0.5$ and $k=0.55$.

### Step 1 — Output of the pipeline

The first stage receives 0, and stage outputs (after the delays) obey $v_i=b_iV_{REF}+k\,v_{i+1}$ from the LSB stage $i=N-1$ down to the MSB stage $i=0$. Unrolling,

$$
v_{OUT}=V_{REF}\left(b_0+k\,b_1+k^2b_2+\cdots+k^{N-1}b_{N-1}\right)=V_{REF}\sum_{i=0}^{N-1}b_ik^{i},
$$

which for $k=\tfrac12$ is the bipolar binary characteristic. The delays only shift the result in time.

### Step 2 — Bit mapping

The word 10100110 (MSB to LSB) gives

$$
(b_0,\dots,b_7)=(+1,-1,+1,-1,-1,+1,+1,-1).
$$

### Step 3 — Ideal output ($k=0.5$)

$$
v_{OUT}=\left(1-0.5+0.25-0.125-0.0625+0.03125+0.015625-0.0078125\right)\mathrm V=0.6015625\ \mathrm V=\frac{77}{128}\ \mathrm V\approx0.6016\ \mathrm V.
$$

Stage by stage from the LSB the running values are $-1,\ 0.5,\ 1.25,\ -0.375,\ -1.1875,\ 0.40625,\ -0.796875,\ 0.6015625$ V.

### Step 4 — Output with $k=0.55$

| $i$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|---|---|
| $b_ik^i$ | 1 | −0.55 | 0.3025 | −0.16638 | −0.09151 | 0.05033 | 0.02768 | −0.01522 |

$$
v_{OUT}=0.5574\ \mathrm V\approx0.557\ \mathrm V .
$$

The error is $-0.044$ V. Adjacent output levels of this bipolar 8-bit converter are $2/128$ V $=15.6$ mV apart, so the error is about $-2.8$ LSB: a 10% error in the attenuation factor is far too large for 8-bit accuracy.
