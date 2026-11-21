# Detailed solution - A452

Judge the speed by how many sequential operations a conversion needs and by what limits each one. Here one charge transfer through a feedback amplifier produces the whole output, so the answer reduces to the settling of the op amp in this feedback configuration.

### Step 1 — Number of operations per conversion

After the reset phase, all bit switches move at the same instant: every capacitor whose bit is 1 goes to $V_{REF}$ simultaneously, and the op amp transfers the total charge $V_{REF}\sum b_i2^{N-1-i}C$ onto $C_X$ in one step. The conversion is fully parallel: one reset plus one charge transfer, independent of $N$, rather than $N$ serial bit cycles as in a serial or successive-approximation DAC.

### Step 2 — No slow floating nodes

Every array capacitor sits between a low-impedance source ($V_{REF}$ or ground through a switch) and the summing node, which the op amp holds at virtual ground. There is no floating high-impedance node whose voltage must be established by charge sharing, so parasitic capacitances do not change the final value: a parasitic $C_p$ at the summing node carries no charge because that node returns to 0 V, and bottom-plate parasitics are driven directly by $V_{REF}$ or ground. They only affect the dynamics, as follows.

### Step 3 — What sets the speed: op-amp settling

During the transfer the op amp sees the feedback factor

$$
\beta=\frac{C_X}{C_X+\sum C+C_p}=\frac{2^NC}{2^NC+(2^N-1)C+C_p}\approx\frac12 ,
$$

because all array capacitors (to low-impedance nodes) load the summing node. For a single-pole op amp the closed-loop bandwidth is $\beta\,GB\approx GB/2$, and settling to 0.5 LSB takes about $\ln(2^{N+1})/(\beta\,GB)$. For example, with $GB=2\pi\times10$ MHz and $N=10$, $\beta=0.500$, $1/(\beta GB)=31.8$ ns and the settling time is $\approx7.6\times31.8\ \text{ns}=0.24\ \mu$s. Large steps may additionally be slew-rate limited, and the switch on-resistances form RC time constants with the capacitors, which grow as the array (about $2^NC$) grows.

### Step 4 — Conclusion

The DAC is **fast**: conversion happens in one parallel charge transfer, the result is insensitive to parasitics because the summing node is a virtual ground, and the speed is limited only by the op amp's closed-loop settling (bandwidth about $GB/2$, slew rate) and the switch RC constants, not by the number of bits.
