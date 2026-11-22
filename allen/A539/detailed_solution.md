# Detailed solution - A539

The amplifier scales the stage-1 residue, so a gain error produces an error in $v_{in}(2)$ proportional to the residue. The residue is largest at the top of each subrange; require the error there to stay within half an LSB of the second stage.

### Step 1 — Residue range

With ideal stage-1 converters, the residue

$$
r=v_{in}(1)-\left(\frac{b_0}2+\frac{b_1}4\right)V_{REF}
$$

lies in $0\le r<V_{REF}/4$ in every subrange, and the second stage receives $v_{in}(2)=A\,r$. Its ideal value is $4r$, which spans the second ADC's full range $0$ to $V_{REF}$; one LSB of the second stage is therefore $V_{REF}/4$, and half an LSB is $V_{REF}/8$.

### Step 2 — Error caused by the gain

$$
\left|v_{in}(2)-4r\right|=|A-4|\,r\le|A-4|\,\frac{V_{REF}}4 ,
$$

with the largest value just below the top of a subrange.

### Step 3 — Gain limits

Requiring the worst-case error to stay within $V_{REF}/8$:

$$
|A-4|\,\frac{V_{REF}}4\le\frac{V_{REF}}8
\;\Longrightarrow\;
|A-4|\le0.5 .
$$

With $V_{REF}=1$ V this reads $|\Delta A|(0.25\ \mathrm V)\le0.125$ V. Hence

$$
A_{max}=4.5,\qquad A_{min}=3.5,\qquad \frac{\Delta A}{A}=\pm\frac{0.5}{4}=\pm12.5\% .
$$
