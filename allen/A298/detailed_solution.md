# Detailed solution - A298

This current-mirror op amp (the same topology as the one with diode loads M3, M4, mirrors of gain $k$ into M8 and M6, the turnaround M9–M11 and cascoded output devices) is analyzed intuitively: find the current the input stage delivers to the output node and multiply by the output resistance seen there. Here $g_{mN}=g_{mP}$ and $r_{dsN}=2r_{dsP}$ for every device except M3 and M4, all devices are saturated, and the mirror gain is $k=g_{m8}/g_{m3}=g_{m6}/g_{m4}$.

### Step 1 — Output resistance

Looking down from the output is the n-channel cascode M12 over M11; looking up is the p-channel cascode M7 over M6:

$$
R_{down}\approx g_{mN}r_{dsN}^2,\qquad R_{up}\approx g_{mP}r_{dsP}^2=g_{mN}\frac{r_{dsN}^2}{4},
$$
$$
R_{out}=R_{down}\parallel R_{up}=\frac{g_{mN}r_{dsN}^2}{5}=0.2\,g_{mN}r_{dsN}^2 .
$$

### Step 2 — Output current and gain

The input splits as $\pm v_{in}/2$, so M1 and M2 change their currents by $\pm0.5g_{mN}v_{in}$. These flow into the diodes M3 and M4 and are multiplied by $k$ in M8 and M6. M6 delivers its share straight to the output; M8's share is turned around by M9–M11, so it changes the output pull-down with the sign that adds to M6's. The output current is $k\,g_{mN}v_{in}$, hence

$$
A_v=k\,g_{mN}R_{out}=0.2k\,(g_{mN}r_{dsN})^2 .
$$

### Step 3 — Numerical estimate

$g_{mN}r_{dsP}=100$ means $g_{mN}r_{dsN}=200$:

$$
R_{out}=0.2(200)\,r_{dsN}=40\,r_{dsN},\qquad A_v=0.2k(200)^2=8\times10^3\,k .
$$

For $k=1$ the gain is about 8000 V/V; for $k=10$ it is about $8\times10^4$ V/V.
