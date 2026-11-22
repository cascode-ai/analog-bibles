# 详细步骤 - A309

伺服环路把被测运放的输出固定在 $v_{SET}$，而电源上的信号源把两个电源轨都移动了相同的 $v_{SET}$。相对于自身电源，运放看到的是输出不变、两个输入都移动了 $-v_{SET}$，这是纯共模输入。抵消其影响所需的差模输入为 $v_{SET}/\mathrm{CMRR}$，分压器使它在 $v_{OS}$ 处被放大约 1000 倍而可见。

### 第 1 步 — 伺服环路迫使 $v_{OUT}=v_{SET}$

辅助运放的反相输入端是不取电流的虚地；右上方信号源在其电阻端加上 $-v_{SET}$，因此

$$
\frac{v_{OUT}}{100\ \mathrm{k\Omega}}+\frac{-v_{SET}}{100\ \mathrm{k\Omega}}=0\;\Rightarrow\;v_{OUT}=v_{SET}.
$$

### 第 2 步 — 电源等量平移相当于共模输入

两电源轨变为 $V_{DD}+v_{SET}$ 和 $-V_{SS}+v_{SET}$。运放没有接地端，因此把它的所有电压平移 $-v_{SET}$：其电源回到标称值，输出（$v_{SET}$）回到 0，而接近 0 V 的两个输入都移到 $-v_{SET}$。于是运放看到共模输入变化 $v_{ic}=-v_{SET}$，而输出不变。

### 第 3 步 — 所需的差模输入

要使输出不变，需 $A_vv_{id}+A_cv_{ic}=0$，取幅值

$$
v_{id}=\frac{A_c}{A_v}v_{SET}=\frac{v_{SET}}{\mathrm{CMRR}},
$$

其中 $v_{id}$ 是以运放固定输入失调 $V_{off}$ 为基准测得的 $v_I$。分压器给出 $v_I=v_{OS}\cdot10/10010$，因此

$$
v_{OS}=1001\left(\frac{v_{SET}}{\mathrm{CMRR}}+V_{off}\right)\approx\frac{1000\,v_{SET}}{\mathrm{CMRR}}+1001V_{off} .
$$

### 第 4 步 — (a) 两次直流测量

所有信号源先设为 +1 V、再设为 −1 V，两次读数中的失调项相同，相减后抵消：

$$
V_{OS1}-V_{OS2}=\frac{1000\,[(+1)-(-1)]\ \mathrm V}{\mathrm{CMRR}}\;\Rightarrow\;\mathrm{CMRR}=\frac{2000\ \mathrm V}{|V_{OS1}-V_{OS2}|} .
$$

### 第 5 步 — (b) 小信号测量

当三个信号源为相等的小信号 $v_{icm}$ 时，直流失调不出现在小信号量中，

$$
v_{os}=\frac{1000\,v_{icm}}{\mathrm{CMRR}}\;\Rightarrow\;\mathrm{CMRR}=\frac{1000\,v_{icm}}{v_{os}} .
$$

扫描 $v_{icm}$ 的频率即得 CMRR 随频率的变化，前提是伺服环路在该频率下仍能保持 $v_{OUT}=v_{SET}$。用 1000 代替 1001 只引入 0.1 % 的误差。
