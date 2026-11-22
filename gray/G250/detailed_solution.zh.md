# 详细步骤 - G250

三个结果都来自输入端的误差电压方程 $v_\epsilon=v_i-fi_o$ 和放大器输出端的诺顿模型。理想反馈网络在输入回路和输出回路中引入的阻抗均为零，因此方程中出现的就是基本放大器原有的 $z_i$ 和 $z_o$。

### 第 1 步 — 闭环跨导

输出端口短路时，$z_o$ 两端电压为零、其中没有电流，因此受控电流全部作为输出电流流出：

$$
i_o=a\,v_\epsilon=a\,(v_i-fi_o)\quad\Rightarrow\quad i_o(1+af)=a\,v_i\quad\Rightarrow\quad\frac{i_o}{v_i}=\frac{a}{1+af}=\frac{a}{1+T}.
$$

### 第 2 步 — 输入阻抗

反馈电压 $fi_o$ 串联在输入回路中，因此同一个输入电流 $i_i$ 流过信号源、反馈网络和 $z_i$。$z_i$ 两端只有 $v_\epsilon$：

$$
i_i=\frac{v_\epsilon}{z_i}.
$$

由增益结果，$fi_o=\dfrac{T}{1+T}\,v_i$，故

$$
v_\epsilon=v_i-fi_o=\frac{v_i}{1+T},\qquad i_i=\frac{v_i}{z_i(1+T)},\qquad Z_i=\frac{v_i}{i_i}=z_i(1+T).
$$

反馈电压与输入相抵，只有 $v_i$ 的 $1/(1+T)$ 驱动电流流入 $z_i$：串联求和提高了输入阻抗。

### 第 3 步 — 输出阻抗

令输入源为零；值为零的理想电压源相当于短路，故 $v_i=0$。在输出端加测试电压 $v$，设 $i$ 为流入放大器输出端的电流。按流向负载的方向，被检测的输出电流为 $i_o=-i$，故

$$
v_\epsilon=0-fi_o=f\,i .
$$

在输出端列 KCL：测试电流流入 $z_o$ 并与受控源相抗，受控源从放大器向外推出 $a\,v_\epsilon$：

$$
i=\frac{v}{z_o}-a\,v_\epsilon=\frac{v}{z_o}-af\,i\quad\Rightarrow\quad i(1+af)=\frac{v}{z_o},\qquad Z_o=\frac{v}{i}=z_o(1+T).
$$

对输出电流采样使环路抵抗该电流的变化，因此输出阻抗提高 $1+T$ 倍。两个端口都是串联连接，故两个阻抗都乘以 $1+T$。
