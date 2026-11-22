# Detailed solution - A012

The resistor $R$ bridges the amplifier's input and output, whose voltages are related by the known gain. Miller's theorem converts it into an equivalent resistor from the input to ground, which is then the whole input resistance because the amplifier itself draws no input current.

### Step 1 — Node-to-node gain

The amplifier is ideal: infinite input resistance and zero output resistance, so its output voltage is $v_o=A_vv_i$ regardless of the current $R$ draws from it. The gain between the two ends of $R$ is therefore exactly

$$
K=\frac{v_o}{v_i}=A_v=0.99 .
$$

### Step 2 — Miller equivalent at the input

The current through $R$, flowing from input to output, is $(v_i-v_o)/R=(1-K)v_i/R$. An element from the input to ground carrying the same current is

$$
R_{\text{in},M}=\frac{R}{1-K}.
$$

The output-side element $RK/(K-1)=(50\ \mathrm{k\Omega})(0.99)/(-0.01)=-4.95$ MΩ is across the ideal zero-resistance output and has no effect on any node voltage.

### Step 3 — Input resistance

The amplifier's own input resistance is infinite, so the input sees only the Miller element:

$$
R_{in}=\frac{R}{1-A_v}=\frac{50\ \mathrm{k\Omega}}{1-0.99}=5\ \mathrm{M\Omega}.
$$

Directly, $i_{in}=(v_i-0.99v_i)/R=0.01v_i/R$, so $R_{in}=v_i/i_{in}=100R=5$ MΩ. Because the output follows the input almost exactly, only 1 % of $v_i$ appears across $R$; this bootstrapping multiplies the apparent value of $R$ by $1/(1-A_v)=100$. The result is very sensitive to the gain: $A_v=0.999$ would give 50 MΩ.
