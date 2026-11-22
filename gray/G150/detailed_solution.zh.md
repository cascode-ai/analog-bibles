# 详细步骤 - G150

两个要求确定电阻：差模增益决定比值 $R_2/R_1$，输入失调电流产生的直流输出决定其绝对大小。电阻成对匹配时，两个输入端看到相同的源电阻，平均偏置电流相互抵消，只有失调电流到达输出。

### 第 1 步 — 增益比

运放理想时 $V_+=V_1R_2/(R_1+R_2)$，在反相输入端列 KCL 并用 $V_-=V_+$，得

$$
V_o=\left(1+\frac{R_2}{R_1}\right)V_+-\frac{R_2}{R_1}V_2=\frac{R_2}{R_1}\left(V_1-V_2\right).
$$

从 $V_2$ 的增益为 $-10$ 要求 $R_2/R_1=10$。

### 第 2 步 — 偏置电流引起的输出

令 $V_1=V_2=0$，并设 $I_{B1}$ 流入同相输入端、$I_{B2}$ 流入反相输入端。同相输入端对地看到 $R_1\parallel R_2$：

$$
V_+=-I_{B1}\left(R_1\parallel R_2\right).
$$

在反相输入端列 KCL，并用 $V_-=V_+$：

$$
\frac{0-V_-}{R_1}+\frac{V_o-V_-}{R_2}=I_{B2}\ \Rightarrow\ \frac{V_o}{R_2}=I_{B2}+V_-\left(\frac1{R_1}+\frac1{R_2}\right)=I_{B2}-I_{B1},
$$
$$
V_o=\left(I_{B2}-I_{B1}\right)R_2=-I_{OS}R_2,\qquad I_{OS}=I_{B1}-I_{B2}.
$$

偏置电流的公共部分相互抵消；只有失调电流经 $R_2$ 出现在输出端。

### 第 3 步 — 电阻取值

$$
|I_{OS}|R_2\le10\ \mathrm{mV}\ \Rightarrow\ R_2\le\frac{10\ \mathrm{mV}}{100\ \mathrm{nA}}=100\ \mathrm{k\Omega},\qquad R_1=\frac{R_2}{10}\le10\ \mathrm{k\Omega}.
$$

例如取 **$R_1=10\ \mathrm{k\Omega}$、$R_2=100\ \mathrm{k\Omega}$**，最坏情况输出恰为 10 mV；任何比值为 10 的更小电阻对也满足要求，代价是对信号源的负载更重。
